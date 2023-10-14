import Link from "next/link";
import { IEducation } from "./interface";

interface Props {
  education: IEducation;
}

function Education({ education }: Props) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">{`${education.from} - ${education.to}`}</div>
      <div className="col-span-10">
        <div>
          <Link href={education.school.link} target="_blank">
            {education.school.label}
          </Link>
        </div>
        <div>{`${education.degree}`}</div>
      </div>
    </div>
  );
}
export default Education;
