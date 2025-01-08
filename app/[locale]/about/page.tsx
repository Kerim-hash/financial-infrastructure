import About from "./sections/about";
import Hero from "./sections/hero";
import Mission from "./sections/mission";
import Structure from "./sections/structure";
export default async function AboutPage() {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Structure />
    </main>
  );
}
