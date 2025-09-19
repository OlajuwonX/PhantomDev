import {ScrollVelocity} from './ui/ScrollVelocity'



const TechStack = () => {
    const Languages = [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
    ];

    const Frameworks = [
        "Acertinity UI",
        "ShadCN",
        "Daisy UI",
        "React",
        "Next.js",
    ];

    return (
        <div>
            <ScrollVelocity
                texts={[Languages, Frameworks]}
                velocity={100}
                className="custom-scroll-text"
            />
        </div>
    )
}
export default TechStack
