import { SparklesCore } from "./ui/sparkles"
import {useTheme} from "./theme-provider";
import NigeriaClock from "./ui/nigerian.clock";
import GradientText from "./ui/GradientText";
import TextType from "./ui/text.type";
import DownloadCVButton from "./download.cv";
import {useNavigate} from "react-router-dom";



const Hero = () => {
    const {theme} = useTheme();
    const particleColor = theme === "dark" ? "#FFFFFF" : "#000000";

    const navigate = useNavigate();



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
            <div className="flex flex-col py-30 px-5 md:px-8 lg:px-10">
                <div className="flex flex-col gap-5 text-center text-black dark:text-white items-center justify-center w-full md:px-10 lg:px-20">
                    <GradientText
                        colors={["#0a5735", "#204db6", "#2b490a", "#22a3cb", "#40ffaa"]}
                        animationSpeed={5}
                        showBorder={false}
                        className="custom-class"
                    >
                        Full Stack Developer
                    </GradientText>
                    <TextType
                        text={[
                            "It's great to have you here.",
                            "I build powerful websites & webapps that help brands thrive online.",
                            "Click on the button below to download my resume and view my projects"
                        ]}
                        typingSpeed={85}
                        pauseDuration={2000}
                        showCursor={true}
                        cursorCharacter="_"
                    />
                    <NigeriaClock />
                    <DownloadCVButton fileUrl="/OlajuwonCV.pdf" fileName="Phantom-Dev.pdf"/>
                    <button className="px-5 py-2 rounded-xl bg-green-700 font-semibold hover:bg-green-600 cursor-pointer transition-all z-10"
                            onClick={() => navigate("/project")}
                    >
                        ➡️ My Projects
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Hero
