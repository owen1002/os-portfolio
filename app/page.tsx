import { Navigation } from "@/components/Navigation";
import {
  Hero,
  About,
  Experience,
  Skills,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Skip Link */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation (includes theme toggle) */}
      <Navigation />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
