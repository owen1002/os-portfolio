import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Hero,
  About,
  Experience,
  Skills,
  Education,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Skip Link */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation />

      {/* Theme Toggle */}
      <ThemeToggle />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
