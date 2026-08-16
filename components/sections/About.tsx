import { profile } from "@/lib/profile";

export function About() {
  const current = profile.experiences[0];
  const education = profile.educations[0];
  const years = new Date().getFullYear() - 2016;

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <span className="section-eyebrow">About</span>
        <h2 className="section-title">Profile</h2>
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I&apos;m a software engineer with over {years} years of experience
              building web applications. Currently working at{" "}
              <a
                href={current.company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                {current.company.label}
              </a>{" "}
              as a {current.position}.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I specialize in building full-stack web applications with modern
              technologies like TypeScript, React, Node.js, and various
              databases. I&apos;m passionate about creating efficient, scalable,
              and user-friendly solutions.
            </p>
          </div>
          <div className="md:col-span-2 card">
            <dl className="fact-list">
              <div>
                <dt>Current</dt>
                <dd>
                  {current.position} @{" "}
                  <a
                    href={current.company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    {current.company.label}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Since</dt>
                <dd className="font-data">{current.from}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  {education.degree},{" "}
                  <a
                    href={education.school.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    {education.school.label}
                  </a>{" "}
                  <span className="font-data text-text-muted">
                    {education.from}–{education.to}
                  </span>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="link-accent">
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
