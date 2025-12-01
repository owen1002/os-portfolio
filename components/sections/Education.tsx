import { profile } from "@/lib/profile";

export function Education() {
  return (
    <section id="education" className="section py-24 bg-bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title">Education</h2>
        {profile.educations.map((education) => (
          <div key={education.school.label} className="card max-w-xl">
            <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
            <a
              href={education.school.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-lg"
            >
              {education.school.label}
            </a>
            <p className="text-sm text-text-muted mt-3 font-mono">
              {education.from} — {education.to}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

