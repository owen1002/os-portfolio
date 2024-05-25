import { ThemeToggle } from "@/components/ThemeToggle";
import SocialMedia from "./SocialMedia";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="flex space-x-6 text-3xl">
          <SocialMedia />
          <ThemeToggle />
        </div>
      </div>

      <div className="text-3xl font-black ">Owen Siu</div>
    </div>
  );
}
export default Header;
