import { profile } from "@/const";

function Header() {
  return (
    <div className="px-8 py-5 flex justify-between text-white font-bold ">
      <div className="border-white border-2 border-solid p-2 rounded-full hover:cursor-pointer hover:opacity-70">
        OS
      </div>
      <div className="flex space-x-8 items-center text-3xl">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin" className="hover:cursor-pointer hover:opacity-70">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="linkedin" className="hover:cursor-pointer hover:opacity-70">
          <i className="fab fa-github" />
        </a>
        <a href={profile.medium} target="_blank" rel="noreferrer" aria-label="linkedin" className="hover:cursor-pointer hover:opacity-70">
          <i className="fab fa-medium-m" />
        </a>
      </div>
    </div>
  );
}
export default Header;
