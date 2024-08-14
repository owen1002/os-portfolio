import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import Header from "./Header";
import Experiences from "./Experiences";
import Educations from "./Educations";
import Resume from "./Resume";
import Introduction from "./Introduction";
import { clsx } from "clsx";

config.autoAddCss = false;

export default function Page() {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className={clsx(
          `flex min-h-96 md:min-w-[640px] mx-8 flex-col justify-between`,
          `border-4 border-dashed border-slate-700 dark:border-slate-200`,
          `p-6`,
        )}
      >
        <div className="w-full">
          <Header />
        </div>
        <div>
          <Introduction />
        </div>
        {/*<div className="flex flex-col space-y-4 justify-center items-center">
        <div className="w-full">
        <Experiences />
        </div>
        <div className="w-full">
        <Educations />
      </div>*/}
        <div className="w-full">
          <Resume />
        </div>
      </div>
      {/*</div>*/}
    </div>
  );
}
