import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { EngineeringProfile } from "@/components/sections/engineering-profile";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedInterfaces } from "@/components/sections/selected-interfaces";
import { SelectedProducts } from "@/components/sections/selected-products";

export default function Home() {
  return (
    <main id="main-content" className="main-content">
      <Hero />
      <EngineeringProfile />
      <Experience />
      <SelectedProducts />
      <SelectedInterfaces />
      <About />
      <Contact />
    </main>
  );
}
