import ProjectCarousel from "../components/ui/carousel";
import ScrollReveal from "../components/ui/scrollreveal";
import {ProjectData} from "../data/data";

const Projects = () => {
    return (
        <div className="container mx-auto px-5 py-8 md:py-10 md:px-6 lg:py-10 lg:px-15 mb-8">
            <ScrollReveal delay={0.1}>
                <h2 className="text-2xl md:text-3xl lg:text-3xl uppercase font-bold text-center mb-8">My Projects</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
            <p className="text-[16px] md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-8 text-center">Here’s a look at the projects I’ve built along the way. Each one reflects my growth as a developer, learning, experimenting, and turning ideas into working products.</p>
            </ScrollReveal>
            <ProjectCarousel
            projects={ProjectData}
            imageRevealDuration={3000}
            showButton={true}
            buttonText="View Project"
            className="mb-8 cursor-pointer overflow-hidden"
        />
        </div>

    )
}
export default Projects
