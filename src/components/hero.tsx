import { SparklesCore } from "./ui/sparkles"
import {useTheme} from "./theme-provider";
import NigeriaClock from "./ui/nigerian.clock";
import GradientText from "./ui/GradientText";
import TextType from "./ui/text.type";



const Hero = () => {

    const {theme} = useTheme();

    const particleColor = theme === "dark" ? "#FFFFFF" : "#000000";



    return (
        <div className="h-[40rem] relative w-full bg-white dark:bg-black flex flex-col overflow-hidden">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    minSize={0.6}
                    maxSize={1.9}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor={particleColor}
                />
            </div>
            <div className="flex flex-col md:flex-row gap-5 text-black dark:text-white py-20 md:my-25 lg:my-30  px-5 md:px-8 lg:px-10">
                <div className="flex flex-col text-center items-center justify-center w-full md:px-10 lg:px-20">
                    <GradientText
                        colors={["#0a5735", "#204db6", "#2b490a", "#22a3cb", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        Full Stack Developer
                    </GradientText>
                    <TextType
                        text={[
                            "It's great to have you here.",
                            "I help brands + businesses thrive online through powerful websites & web applications.",
                            "Click on the button below to download my resume and view my projects"
                        ]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                    />
                    <NigeriaClock />
                </div>
            </div>
        </div>
    )
}
export default Hero
