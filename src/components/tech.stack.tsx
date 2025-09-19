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
        <div className="p-3 bg-white dark:bg-black">
            <ScrollVelocity
                texts={[Languages.join(" • "), Frameworks.join(" • ")].flat()}
                velocity={80}
                className="custom-scroll-text"
            />
        </div>
    )
}
export default TechStack
