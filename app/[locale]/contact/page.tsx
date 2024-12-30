import { ContactForm } from "@/components/ContactForm";
import Hero from "./sections/hero";
import About from "./sections/about";
export default async function ContactPage() {
  return (
    <div>
      <Hero />  
      <About />
      <ContactForm />
    </div>
  );
}
