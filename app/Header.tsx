import SocialMedia from "./SocialMedia";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-6xl font-black ">Owen</div>
      <div className="flex space-x-6 text-3xl">
        <SocialMedia />
      </div>
    </div>
  );
}
export default Header;
