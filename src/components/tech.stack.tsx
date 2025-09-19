import {ScrollVelocity} from './ui/ScrollVelocity'

const TechStack = () => {
    const Languages = [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
        ""
    ];

    const Frameworks = [
        "Acertinity.UI",
        "ShadCN",
        "Daisy UI",
        "React",
        "Next.js",
        "ExpressJs",
        "Node.js",
        "React.Bits",
        "PayloadCMS",
        "",
    ];

    return (
        <div
            id="tech-stack"
            className="py-8 bg-white dark:bg-black">
            <ScrollVelocity
                texts={[Languages.join(" • "), Frameworks.join(" • ")].flat()}
                velocity={60}
                className="custom-scroll-text"
            />
        </div>
    )
}
export default TechStack
