import Experience from "./Experience";
import { profile } from "./const";

function Experiences() {
  return (
    <div className="flex flex-col space-y-4">
      {profile.experiences.map((exp, i) => {
        return (
          <div key={i}>
            <Experience experience={exp}/>
          </div>
        );
      })}
    </div>
  );
}
export default Experiences;
