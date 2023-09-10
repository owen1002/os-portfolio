import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import Header from "./Header";
import Experiences from "./Experiences";
import Educations from "./Educations";
import Resume from "./Resume";

config.autoAddCss = false;

export default function Page() {
  return (
    <div className="p-6 flex flex-col space-y-10 max-w-7xl mx-auto">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="w-full">
          <Experiences />
        </div>
        <div className="w-full">
          <Educations />
        </div>
        <div className="w-full">
          <Resume />
        </div>
      </div>
    </div>
  );
}
