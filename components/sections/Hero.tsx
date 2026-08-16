import { profile } from "@/lib/profile";
import { SocialIcon } from "@/components/SocialIcon";

const RESUME_URL =
  "https://docs.google.com/document/d/1ze2Zxe_kk-4HlbPCQluzdnDpELV5GmeMVpUYYvrHz2c/edit?pli=1&tab=t.0#heading=h.gjdgxs";

export function Hero() {
  const current = profile.experiences[0];
  const years = new Date().getFullYear() - 2016;
  const focusStack = ["TypeScript", "React", "kdb+ q"].filter((s) =>
    current.techStack.includes(s)
  );

  return (
    <section className="hero">
      <div className="section-inner w-full">
        <p className="hero-eyebrow opacity-0 animate-fade-in-up">
          Software Engineer · Hong Kong
        </p>
        <h1 className="hero-name opacity-0 animate-fade-in-up delay-100">
          {profile.name}
        </h1>
        <p className="hero-tagline opacity-0 animate-fade-in-up delay-200">
          Full-stack engineer with {years}+ years shipping web systems for
          finance — currently building pricing and risk tooling at{" "}
          <a
            href={current.company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            {current.company.label}
          </a>
          .
        </p>

        {/* Quote strip — a securities-master row, for a person */}
        <dl className="quote-strip opacity-0 animate-fade-in-up delay-300">
          <div className="quote-cell">
            <dt className="quote-label">Role</dt>
            <dd className="quote-value">
              {current.position} @ {current.company.label}
            </dd>
          </div>
          <div className="quote-cell">
            <dt className="quote-label">Exp</dt>
            <dd className="quote-value">{years}Y+</dd>
          </div>
          <div className="quote-cell">
            <dt className="quote-label">Stack</dt>
            <dd className="quote-value">{focusStack.join(" · ")}</dd>
          </div>
          <div className="quote-cell">
            <dt className="quote-label">Status</dt>
            <dd className="quote-value">
              <span className="ok-dot" aria-hidden="true" />
              Open to opportunities
            </dd>
          </div>
        </dl>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 opacity-0 animate-fade-in-up delay-400">
          {profile.websites.map((site) => (
            <a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={site.label}
            >
              <SocialIcon name={site.name} />
              <span>{site.label}</span>
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Resume"
          >
            <SocialIcon name="resume" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
