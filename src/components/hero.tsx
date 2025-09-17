import { SparklesCore } from "./ui/sparkles"
import {useTheme} from "./theme-provider";
import NigeriaClock from "./ui/nigerian.clock";

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
            <div className="flex flex-col lg:flex-row md:flex-row gap-5 text-black dark:text-white py-20 md:my-25 lg:my-30  px-5 md:px-8 lg:px-10">
                <div className="flex flex-col text-center w-full lg:w-[55%]">
                    <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-black dark:text-white relative z-20">
                        Full Stack Developer
                    </h1>
                    <p className="text-2xl md:text-2xl lg:text-3xl pt-5 md:pt-8 lg:pt-10">
                        Helping brands + businesses thrive online through powerful websites & web applications.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                    <NigeriaClock />
                </div>
            </div>
        </div>
    )
}
export default Hero
