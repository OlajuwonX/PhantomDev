import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(3, "Message must be at least 3 characters").max(5000),
  honeypot: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.honeypot) {
      return new Response(JSON.stringify({ success: false }), { status: 400 });
    }

    const validatedData = contactSchema.parse(body);

    const destinationEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "olasimboolajuwon@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: destinationEmail,
      replyTo: validatedData.email,
      subject: `New contact form submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(validatedData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(validatedData.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(validatedData.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 },
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message sent",
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issue = error.issues[0]?.message;
      return Response.json(
        {
          success: false,
          message: issue || "Please check your input and try again.",
        },
        { status: 400 },
      );
    }

    console.error("Contact form error:", error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
