import { profile } from "@/lib/profile";
import { SocialIcon } from "@/components/SocialIcon";

export function Hero() {
  return (
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
              left: `${10 + i * 7.5}%`,
              top: `${20 + ((i * 17) % 60)}%`,
              background:
                i % 3 === 0 ? "#f7768e" : i % 3 === 1 ? "#7dcfff" : "#bb9af7",
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
  );
}

