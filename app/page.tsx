import { Hero } from "@/components/sections/hero";
import { EngineeringProfile } from "@/components/sections/engineering-profile";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <main id="main-content" className="main-content">
      <Hero />
      <EngineeringProfile />
      <Experience />
    </main>
  );
}
