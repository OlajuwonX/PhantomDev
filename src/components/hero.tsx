import { SparklesCore } from "./ui/sparkles"
import {useTheme} from "./theme-provider";
import NigeriaClock from "./ui/nigerian.clock";
import GradientText from "./ui/GradientText";

const Hero = () => {

    const {theme} = useTheme();

    const particleColor = theme === "dark" ? "#FFFFFF" : "#000000";

    return (
        <div className="h-[40rem] relative w-full bg-white dark:bg-black flex flex-col overflow-hidden">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.9}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor={particleColor}
                />
            </div>
            <div className="flex flex-col md:flex-row gap-5 text-black dark:text-white py-20 md:my-25 lg:my-30  px-5 md:px-8 lg:px-10">
                <div className="flex flex-col text-center w-full md:px-10 lg:px-20">
                    <GradientText
                        colors={["#0a5735", "#204db6", "#2b490a", "#22a3cb", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        Full Stack Developer
                    </GradientText>
                    <p className="text-2xl md:text-2xl lg:text-3xl pt-5 md:pt-8 lg:pt-10">
                        Helping brands + businesses thrive online through powerful websites & web applications.
                    </p>
                    <NigeriaClock />
                </div>
            </div>
        </div>
    )
}
export default Hero
