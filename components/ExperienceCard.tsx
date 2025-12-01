"use client";

import { useState } from "react";
import { IExperience } from "@/lib/interface";

interface ExperienceCardProps {
  experience: IExperience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="timeline-item opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="card">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary">
              {experience.position}
            </h3>
            <a
              href={experience.company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-lg"
            >
              {experience.company.label}
            </a>
            {experience.specialRemark && (
              <p className="text-sm text-text-muted mt-1 italic">
                {experience.specialRemark}
              </p>
            )}
          </div>
          <span className="text-sm text-text-muted whitespace-nowrap font-mono">
            {experience.from} — {experience.to}
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.techStack.map((tech) => (
            <span key={tech} className="skill-pill text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Duties */}
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
          <ul className="list-none space-y-2 text-text-secondary">
            {experience.duties.map((duty, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-accent mt-1.5 flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <span>{duty}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show ${experience.duties.length} responsibilities`}
        </button>
      </div>
    </div>
  );
}

