import { profile } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="section py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title">About</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I&apos;m a software engineer with over{" "}
              {new Date().getFullYear() - 2016} years of experience building web
              applications. Currently working at{" "}
              <a
                href={profile.experiences[0].company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                {profile.experiences[0].company.label}
              </a>{" "}
              as a {profile.experiences[0].position}.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I specialize in building full-stack web applications with modern
              technologies like TypeScript, React, Node.js, and various
              databases. I&apos;m passionate about creating efficient, scalable,
              and user-friendly solutions.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Current Role</h3>
            <p className="text-text-secondary mb-2">
              {profile.experiences[0].position}
            </p>
            <a
              href={profile.experiences[0].company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              {profile.experiences[0].company.label}
            </a>
            <p className="text-sm text-text-muted mt-4 font-mono">
              {profile.experiences[0].from} — {profile.experiences[0].to}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

