import { ContactForm } from "@/components/ContactForm";
import Hero from "./home/sections/hero";
import About from "./home/sections/about";
import OurPlatform from "./home/sections/ourPlatform";
import MissionAndGoal from "./home/sections/MissionAndGoal";
import Trust from "./home/sections/trust";
import Goals from "./home/sections/goals";

export default async function HomePage() {
  return (
    <div>
       <Hero />
       <About />
       <OurPlatform />
       <MissionAndGoal />
       <Trust />
       <Goals />
       <ContactForm />
    </div>
  );
}
