import Link from "next/link";
import { Experience } from "./interface";

interface Props {
  experience: Experience;
}

function Experience({ experience }: Props) {
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <div className="text-lg font-medium">
          <Link href={experience.company.link} target="_blank">
            {experience.company.label}
          </Link>
        </div>
        <div>{experience.specialRemark}</div>
      </div>
      <div>{`Position: ${experience.position}`}</div>
      <div>{`${experience.from} - ${experience.to}`}</div>
      <div>{experience.techStack.join(" / ")}</div>
      <ul>
        {experience.duties.map((duty, i) => {
          return <li key={i}>{duty}</li>;
        })}
      </ul>
    </div>
  );
}
export default Experience;