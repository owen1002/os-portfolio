import { ThemeToggle } from "@/components/ThemeToggle";
import SocialMedia from "./SocialMedia";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-6xl font-black ">Owen Siu</div>
      <div className="flex space-x-6 text-3xl">
        <SocialMedia />
        <ThemeToggle />
      </div>
    </div>
  );
}
export default Header;
