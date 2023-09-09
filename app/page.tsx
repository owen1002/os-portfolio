import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import Header from "./Header";
import Experiences from "./Experiences";
import Educations from "./Educations";

config.autoAddCss = false;

export default function Page() {
  return (
    <div className="p-6 flex flex-col space-y-10 max-w-7xl mx-auto">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Experiences />
        </div>
        <Educations />
      </div>
    </div>
  );
}
