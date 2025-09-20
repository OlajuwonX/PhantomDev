import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    console.log('Received form data:', { name, email, phone, description: '[REDACTED]' });

    try {
        const { name, email, phone, description } = req.body;
        console.log('Received form data:', { name, email, phone, description: '[REDACTED]' });
        if (!name || !email || !description) {
            console.error('Missing required fields:', { name: !!name, email: !!email, description: !!description });
            return res.status(400).json({
                success: false,
                error: "Name, email, and message are required fields"
            });
        }
        const { error } = await resend.emails.send({
            from: "Phantom Dev",
            to: "olasimboolajuwon@gmail.com",
            subject: "New Collab Message!",
            html: `
        <h2>New Inquiry from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
        });
        if (error) {
            console.error('Resend API error:', error);
            return res.status(400).json({
                success: false,
                error: error.message || 'Failed to send email'
            });
        }
        console.log('Email sent successfully to olasimboolajuwon@gmail.com');
        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });

    } catch (error) {
        console.error('API handler error:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Internal server error'
        });
    }
}