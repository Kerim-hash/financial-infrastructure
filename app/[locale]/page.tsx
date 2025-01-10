import { ContactForm } from "@/components/ContactForm";
import Hero from "./home/sections/hero";
import About from "./home/sections/about";
import MissionAndGoal from "./home/sections/MissionAndGoal";
import OurPlatformWrapper from "./home/sections/OurPlatformWrapper";
import TrustWrapper from "./home/sections/trustWrapper";
import GoalsWrapper from "./home/sections/goalsWrapper";

export default async function HomePage() {
  return (
    <div>
       <Hero />
       <About />
       <OurPlatformWrapper/>
       <MissionAndGoal />
       <TrustWrapper />
       <GoalsWrapper />
       <ContactForm />
    </div>
  );
}
