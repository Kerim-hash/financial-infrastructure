import { ContactForm } from "@/components/ContactForm";
import Hero from "./sections/hero";
import About from "./sections/about";
export default async function ContactPage() {
  return (
    <main className="bg-[#F5F5F7]">
      <Hero />  
      <About />
      <ContactForm />
    </main>
  );
}
