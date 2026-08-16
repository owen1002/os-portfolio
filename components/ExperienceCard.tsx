import { IExperience } from "@/lib/interface";

export function ExperienceCard({ experience }: { experience: IExperience }) {
  const isCurrent = experience.to.toLowerCase() === "now";

  return (
    <article className="ledger-row">
      <div className="ledger-dates">
        <div>{experience.from}</div>
        <div className={isCurrent ? "now" : undefined}>
          — {isCurrent ? "Now" : experience.to}
        </div>
      </div>
      <div>
        <h3 className="ledger-position">{experience.position}</h3>
        <a
          href={experience.company.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          {experience.company.label}
        </a>
        {experience.specialRemark && (
          <p className="text-sm text-text-muted mt-1">
            {experience.specialRemark}
          </p>
        )}
        <ul className="ledger-duties">
          {experience.duties.map((duty, i) => (
            <li key={i}>{duty}</li>
          ))}
        </ul>
        <p className="ledger-stack">
          <span className="stack-label">stack:</span>{" "}
          {experience.techStack.join(" · ")}
        </p>
      </div>
    </article>
  );
}
