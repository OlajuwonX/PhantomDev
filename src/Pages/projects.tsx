import ProjectCarousel from "../components/ui/carousel";
import {ProjectData} from "../data/data";

const Projects = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <ProjectCarousel
            projects={ProjectData}
            imageRevealDuration={2500}
            showButton={true}
            buttonText="View Project"
            className="mb-8"
        />
        </div>
    )
}
export default Projects
