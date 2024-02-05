import Link from "next/link";
import { IExperience } from "./interface";

interface Props {
  experience: IExperience;
}

function Experience({ experience }: Props) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 text-gray-300">{`${experience.from} - ${experience.to}`}</div>
      <div className="col-span-10 ">
        <div className="flex space-x-2 items-center">
          <div className="text-lg font-medium">
            <Link href={experience.company.link} target="_blank">
              {experience.company.label}
            </Link>
          </div>
          {experience.specialRemark && <div>{`(${experience.specialRemark})`}</div>}
        </div>
        <div>{`Position: ${experience.position}`}</div>
        <div>{experience.techStack.join(" / ")}</div>
        <ul>
          {experience.duties.map((duty, i) => {
            return <li key={i}>{duty}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Experience;
