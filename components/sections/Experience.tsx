import { profile } from "@/lib/profile";
import { ExperienceCard } from "@/components/ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="section bg-bg-secondary/40">
      <div className="section-inner">
        <span className="section-eyebrow">Experience</span>
        <h2 className="section-title">Where I&apos;ve worked</h2>
        <div className="ledger">
          {profile.experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company.label}-${experience.from}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
