import { profile } from "@/lib/profile";
import { SocialIcon } from "@/components/SocialIcon";

export function Contact() {
  return (
    <section id="contact" className="section bg-bg-secondary/40">
      <div className="section-inner">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Get in touch</h2>
        <p className="text-lg text-text-secondary mb-8 max-w-xl">
          I&apos;m always open to discussing new projects, opportunities, or
          just having a chat about technology.
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-12">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email me
          </a>
          <a href={`mailto:${profile.email}`} className="social-link">
            {profile.email}
          </a>
        </div>

        <footer className="flex flex-wrap items-center gap-6 pt-8 border-t border-border">
          <span className="font-data text-sm text-text-muted">
            owen<span className="text-accent">.siu</span>
          </span>
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
        </footer>
      </div>
    </section>
  );
}
