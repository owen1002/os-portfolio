import Education from "./Education";
import { profile } from "./const";

function Educations() {
  return (
    <div>
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
