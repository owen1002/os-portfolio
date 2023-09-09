import Link from "next/link";
import { Education } from "./interface";

interface Props {
  education: Education;
}

function Education({ education }: Props) {
  return (
    <div>
      <div className="font-medium">
        <Link href={education.school.link} target="_blank">
          {education.school.label}
        </Link>
      </div>
      <div>{`${education.degree} (${education.from} - ${education.to})`}</div>
    </div>
  );
}
export default Education;
