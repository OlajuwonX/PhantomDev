import {AboutData} from "../data/data";
import ScrollReveal from "../components/ui/scrollreveal";

const About = () => {
    return (
        <div className="py-5 px-4 lg:px-12 lg:py-10">
            <p className="text-2xl md:text-3xl lg:text-3xl font-bold pb-3">From Blueprints to Codeprints</p>
            {AboutData.map(({id, details}) => (
                <ScrollReveal delay={0.1 * id + 1}>
                    <p key={id}
                       className="text-[14px] lg:text-[18px] tracking-[1px] pb-3 leading-6 w-full md:w-[70%] lg:w-[70%]">
                        {details}
                    </p>
                </ScrollReveal>
            ))}
        </div>
    )
}
export default About
