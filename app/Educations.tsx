import Education from "./Education";
import { profile } from "./const";

function Educations() {
  return (
    <div className="flex flex-col space-y-4">
      {profile.educations.map((education, i) => {
        return (
          <div key={i}>
            <Education education={education} />
          </div>
        );
      })}
    </div>
  );
}
export default Educations;
