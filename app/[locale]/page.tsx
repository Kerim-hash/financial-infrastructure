import { ContactForm } from "@/components/ContactForm";
import Hero from "./home/sections/hero";
import About from "./home/sections/about";
import MissionAndGoal from "./home/sections/MissionAndGoal";
import Goals from "./home/sections/goals";
import OurPlatformWrapper from "./home/sections/OurPlatformWrapper";
import TrustWrapper from "./home/sections/trustWrapper";

export default async function HomePage() {
  return (
    <div>
       <Hero />
       <About />
       <OurPlatformWrapper/>
       <MissionAndGoal />
       <TrustWrapper />
       <Goals />
       <ContactForm />
    </div>
  );
}
