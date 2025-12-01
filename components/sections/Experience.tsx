import { profile } from "@/lib/profile";
import { ExperienceCard } from "@/components/ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="section py-24 bg-bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {profile.experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company.label}-${experience.from}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

