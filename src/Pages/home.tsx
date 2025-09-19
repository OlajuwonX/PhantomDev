import Hero from '../components/hero'
import TechStack from "../components/tech.stack";
import FAQ from "../components/FAQ";
import Testimonials from '../components/testimonials';
import ScrollReveal from "../components/ui/scrollreveal";

const Home = () => {
    return (
        <div>

            <Hero />
            <ScrollReveal delay={0.1}>
                <TechStack />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <FAQ />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
                <Testimonials />
            </ScrollReveal>

        </div>
    )
}
export default Home
