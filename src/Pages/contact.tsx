import ScrollReveal from "../components/ui/scrollreveal";
import animationData from "../data/confetti.json";
import Lottie from "lottie-react";
import {useState} from "react";

const Contact = () => {
    const [description, setDescription] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);

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
            console.log('Making API request to /api/send-email...');
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            console.log('Response status:', res.status);
            console.log('Response ok:', res.ok);
            const responseData = await res.json();
            console.log('Response data:', responseData);

            if (res.ok) {
                console.log('Form submitted successfully - triggering animation');
                setDescription("");
                (form as HTMLFormElement).reset();
                setFormMessage("✅ Message sent successfully!");
                setIsAnimating(true);
                console.log('isAnimating set to true');
                setTimeout(() => {
                    setIsAnimating(false);
                    console.log('Animation ended');
                }, 3000);
            } else {
                console.error('Server responded with error:', res.status, responseData);
                setFormMessage(`❌ Failed to send message: ${responseData.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Network error during form submission:', error);
            setFormMessage("🚨 Error sending message.");
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
                <p className="text-center text-[15px] md:text-xl lg:text-xl md:px-20 lg:px-25 mb-5">Kindly fill in the form below, your response will be forwarded directly to my email, I'd love to hear from you.</p>
            </ScrollReveal>

            {isAnimating && (
                <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <Lottie
                        animationData={animationData}
                        loop={false}
                        autoplay={true}
                        style={{ width: 400, height: 300 }} // Reduced size for better mobile display
                        onComplete={() => {
                            console.log('Lottie animation completed');
                            setIsAnimating(false);
                        }}
                        onLoopComplete={() => console.log('Lottie loop completed')}
                        onEnterFrame={() => console.log('Lottie frame rendered')}
                    />
                </div>
            )}

<ScrollReveal delay={0.3}>
    <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 md:gap-5 lg:gap-8 w-full md:px-25 lg:px-50">
        <ScrollReveal delay={0.4}>
            <div className="flex flex-col md:flex-row lg:flex-row gap-[3px] md:gap-3 lg:gap-3">
                <label className="px-2 text-[15px] md:text-xl lg:text-xl item-start">NAME</label>
                <input
                    className="border border-teal-600 rounded-sm px-2 py-[3px] outline-none focus:border-yellow-200 w-full"
                    placeholder="Phantom Dev"
                    type="text"
                    name="name"
                    required
                />
            </div>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
            <div className="flex flex-col md:flex-row lg:flex-row gap-[3px] md:gap-3 lg:gap-3">
                <label className="px-2 text-[15px] md:text-xl lg:text-xl item-start uppercase">Phone</label>
                <input
                    className="border border-teal-600 rounded-sm px-2 py-[3px] outline-none focus:border-yellow-200 w-full"
                    placeholder="+1-234-5678-910"
                    type="tel"
                    name="phone"
                    required
                />
            </div>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
            <div className="flex flex-col md:flex-row lg:flex-row gap-[3px] md:gap-3 lg:gap-3">
                <label className="px-2 text-[15px] md:text-xl lg:text-xl item-start uppercase">Email</label>
                <input
                    className="bg-inherit border border-teal-600 rounded-sm px-2 py-[3px] outline-none focus:border-yellow-200 w-full"
                    placeholder="phantomdev@gmail.com"
                    type="email"
                    name="email"
                    required />
            </div>
        </ScrollReveal>
        <ScrollReveal delay={0.7}>
            <div className="flex flex-col gap-[3px] md:gap-2 lg:gap-2 mt-5 md:mt-8 lg:mt-8">
                <label className="px-2 text-[15px] md:text-xl lg:text-xl item-start uppercase">Message</label>
                <textarea
                    className="bg-inherit border border-teal-600 rounded-sm px-2 py-[3px] outline-none focus:border-yellow-200 w-full h-[150px] md:h-[200px] lg:h-[200px]"
                    placeholder="type a message here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="message"
                    required
                />
            </div>
        </ScrollReveal>
        <ScrollReveal delay={0.8}>
            <div className="flex flex-col item-center justify-center mt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2 rounded-lg text-[15px] md:text-xl lg:text-xl bg-teal-700 font-semibold hover:bg-teal-600 cursor-pointer transition-all"
                >
                    {isSubmitting ? "Sending..." : "Submit"}
                </button>
                {formMessage && (
                    <p
                        className={`text-center mt-4 ${
                            formMessage.includes("✅") ? "text-teal-800" : "text-red-600"
                        }`}
                    >
                        {formMessage}
                    </p>
                )}
            </div>
        </ScrollReveal>
    </form>
</ScrollReveal>
        </div>
    )
}
export default Contact
