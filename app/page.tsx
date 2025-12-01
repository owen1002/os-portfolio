import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ExperienceCard } from "@/components/ExperienceCard";
import { profile } from "@/lib/profile";

// Extract unique skills from all experiences and categorize them
function getSkillsByCategory() {
  const allSkills = new Set<string>();
  profile.experiences.forEach((exp) => {
    exp.techStack.forEach((skill) => allSkills.add(skill));
  });

  const categories: Record<string, string[]> = {
    Frontend: [],
    Backend: [],
    Database: [],
    "DevOps & Tools": [],
  };

  const skillCategories: Record<string, string> = {
    // Frontend
    "TypeScript": "Frontend",
    "Typescript": "Frontend",
    "JavaScript": "Frontend",
    "React": "Frontend",
    "Redux": "Frontend",
    "Next.js": "Frontend",
    "AngularJS": "Frontend",
    "Ant Design": "Frontend",
    "MaterialUI": "Frontend",
    "Tailwind CSS": "Frontend",
    // Backend
    "Node.js": "Backend",
    "NestJS": "Backend",
    ".NET Core": "Backend",
    "GraphQL": "Backend",
    "Microservices": "Backend",
    "kdb+ q": "Backend",
    // Database
    "MongoDB": "Database",
    "PostgreSQL": "Database",
    "SQL": "Database",
    // DevOps
    "Docker": "DevOps & Tools",
    "AWS": "DevOps & Tools",
  };

  allSkills.forEach((skill) => {
    const category = skillCategories[skill] || "DevOps & Tools";
    if (!categories[category].includes(skill)) {
      categories[category].push(skill);
    }
  });

  return categories;
}

function SocialIcon({ name }: { name: string }) {
  const iconClass = "w-5 h-5 fill-current";

  switch (name.toLowerCase()) {
    case "github":
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "medium":
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    case "resume":
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0-4h8v2H8v-2zm0 8h5v2H8v-2z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.057h-2.538zm-1-3.057v3.057h-2.538c-.244-.817-.397-1.914-.456-3.057h2.994zm-2.994-1h2.994v-3.057h-2.538c-.244.817-.397 1.914-.456 3.057zm3.994-3.057v3.057h2.994c-.059-1.143-.212-2.24-.456-3.057h-2.538z" />
        </svg>
      );
  }
}

export default function Home() {
  const skills = getSkillsByCategory();

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
        {/* Hero Section */}
        <section className="section min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated background elements - Japanese Night style */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Glowing orbs */}
            <div
              className="absolute top-1/3 left-1/4 w-[600px] h-[600px] opacity-30 animate-float"
              style={{
                background: "radial-gradient(circle, #7dcfff 0%, transparent 70%)",
                filter: "blur(120px)",
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] opacity-25 animate-float"
              style={{
                background: "radial-gradient(circle, #bb9af7 0%, transparent 70%)",
                filter: "blur(100px)",
                animationDelay: "-1.5s",
              }}
            />
            {/* Sakura accent glow */}
            <div
              className="absolute top-1/2 right-1/3 w-[300px] h-[300px] opacity-20 animate-float"
              style={{
                background: "radial-gradient(circle, #f7768e 0%, transparent 70%)",
                filter: "blur(80px)",
                animationDelay: "-3s",
              }}
            />
            
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full animate-float-particle"
                style={{
                  left: `${10 + (i * 7.5)}%`,
                  top: `${20 + ((i * 17) % 60)}%`,
                  background: i % 3 === 0 ? '#f7768e' : i % 3 === 1 ? '#7dcfff' : '#bb9af7',
                  opacity: 0.4 + (i % 3) * 0.2,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + (i % 3)}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 opacity-0 animate-fade-in-up">
              {profile.name}
            </h1>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 opacity-0 animate-fade-in-up delay-200">
              {profile.websites.map((site) => (
                <a
                  key={site.name}
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card-bg backdrop-blur-sm text-text-primary hover:border-accent hover:text-accent transition-all duration-300"
                  aria-label={site.label}
                >
                  <SocialIcon name={site.name} />
                  <span className="hidden sm:inline">{site.label}</span>
                </a>
              ))}
            </div>

            {/* Resume Link */}
            <div className="opacity-0 animate-fade-in-up delay-400">
              <a
                href="https://docs.google.com/document/d/1ze2Zxe_kk-4HlbPCQluzdnDpELV5GmeMVpUYYvrHz2c/edit?pli=1&tab=t.0#heading=h.gjdgxs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent hover:underline transition-all duration-300"
                aria-label="Resume"
              >
                <SocialIcon name="resume" />
                <span>View my Resume</span>
              </a>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="section-title">About</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  I&apos;m a software engineer with over{" "}
                  {new Date().getFullYear() - 2016} years of experience building
                  web applications. Currently working at{" "}
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
                  databases. I&apos;m passionate about creating efficient,
                  scalable, and user-friendly solutions.
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

        {/* Experience Section */}
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

        {/* Skills Section */}
        <section id="skills" className="section py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="section-title">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category} className="card">
                  <h3 className="text-lg font-semibold mb-4 text-accent">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
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

        {/* Contact Section */}
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

      </main>
    </>
  );
}
