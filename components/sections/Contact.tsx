import { profile } from "@/lib/profile";

export function Contact() {
  return (
    <section id="contact" className="section py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="section-title mx-auto">Get In Touch</h2>
        <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
          I&apos;m always open to discussing new projects, opportunities, or
          just having a chat about technology.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-bg-primary font-semibold hover:opacity-90 transition-opacity"
          >
            <svg
              width="20"
              height="20"
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
            Send Email
          </a>
        </div>

        <div className="text-text-muted">
          <p className="font-mono">{profile.email}</p>
        </div>
      </div>
    </section>
  );
}

