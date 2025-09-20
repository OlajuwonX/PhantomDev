import ScrollReveal from "../components/ui/scrollreveal";
import {useState} from "react";

const Contact = () => {
    const [description, setDescription] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormMessage("");

        const form = e.target as HTMLFormElement;
        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            description,
        };

        console.log('Submitting form data:', { ...formData, description: '[REDACTED]' }); // Log without exposing message content

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                console.log('Form submitted successfully');
                window.location.href = "/thank-you";
            } else {
                console.error('Server responded with error:', res.status);
                setFormMessage("❌ Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error('Network error during form submission:', error);
            setFormMessage("🚨 Error sending message. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 mb-8 py-8 px-5 md:py-10 md:px-12 lg:px-10 lg:py-13">
            <ScrollReveal delay={0.1}>
                <h1 className="uppercase font-semibold md:font-bold lg:font-bold text-center text-2xl md:text-3xl lg:text-3xl -tracking-tight">Contact Me</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p className="text-center text-xl md:text-2xl lg:text-2xl md:px-20 lg:px-25 mb-5">Kindly fill in the form below, your response will be forwarded directly to my email, I'd love to hear from you.</p>
            </ScrollReveal>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 md:gap-5 lg:gap-8 w-full md:px-25 lg:px-50">
                <div className="flex flex-col md:flex-row lg:flex-row gap-[3px] md:gap-3 lg:gap-3">
                    <label className="px-2 text-[15px] md:text-2xl lg:text-2xl item-start">NAME</label>
                    <input
                        className="border border-teal-600 rounded-sm px-2 py-[3px] outline-none hover:border-yellow-200 w-full"
                        placeholder="Phantom Dev"
                        type="text"
                        name="name"
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-[3px] md:gap-3 lg:gap-3">
                    <label className="px-2 text-[15px] md:text-xl lg:text-xl item-start uppercase">Phone</label>
                    <input
                        className="border border-teal-600 rounded-sm px-2 py-[3px] outline-none hover:border-yellow-200 w-full"
                        placeholder="+1-234-5678-910"
                        type="phone"
                        name="phone"
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-[3px] md:gap-3 lg:gap-3">
                    <label className="px-2 text-[15px] md:text-xl lg:text-xl item-start uppercase">Email</label>
                    <input
                        className="border border-teal-600 rounded-sm px-2 py-[3px] outline-none hover:border-yellow-200 w-full"
                        placeholder="phantomdev@gmail.com"
                        type="email"
                        name="email"
                        required />
                </div>
                <div className="flex flex-col gap-[3px] md:gap-2 lg:gap-2 mt-5 md:mt-8 lg:mt-8">
                    <label className="px-2 text-[15px] md:text-xl lg:text-xl item-start uppercase">Message</label>
                    <textarea
                        className="border border-teal-600 rounded-sm px-2 py-[3px] outline-none hover:border-yellow-200 w-full h-[150px] md:h-[200px] lg:h-[200px]"
                        placeholder="type a message here..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        name="message"
                        required
                    />
                </div>
                <div className="flex item-center justify-center mt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-2 rounded-lg text-[15px] md:text-xl lg:text-xl bg-green-700 font-semibold hover:bg-green-600 cursor-pointer transition-all"
                    >
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                    {formMessage && (
                        <p
                            className={`FormMessage ${
                                formMessage.includes("✅") ? "success" : "error"
                            }`}
                        >
                            {formMessage}
                        </p>
                    )}
                </div>
            </form>
        </div>
    )
}
export default Contact
