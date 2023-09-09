import Link from "next/link";
import { profile } from "./const";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

function getIcon(name: string) {
  switch (name) {
    case "medium":
      return faMedium;
    case "linkedin":
      return faLinkedin;
    case "github":
      return faGithub;
    default:
      return faEnvelope;
  }
}

function SocialMedia() {
  return (
    <>
      {profile.websites.map((x) => {
        return (
          <Link href={x.link} key={x.name} target="_blank">
            <span>
              <FontAwesomeIcon
                icon={getIcon(x.name)}
                className="hover:opacity-80"
              />
            </span>
          </Link>
        );
      })}
    </>
  );
}
export default SocialMedia;
