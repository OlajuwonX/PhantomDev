import Hero from '../components/hero'
import TechStack from "../components/tech.stack";
import FAQ from "../components/FAQ";
import Testimonials from '../components/testimonials';

const Home = () => {
    return (
        <div>
            <Hero />
            <TechStack />
            <FAQ />
            <Testimonials />
        </div>
    )
}
export default Home
