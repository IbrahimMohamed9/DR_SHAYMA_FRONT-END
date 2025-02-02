import HeaderButtons from "../molecules/HeaderButtons";
import HeaderLogo from "../atoms/HeaderLogo";
import NavDesktop from "../atoms/NavDesktop";
import { NavMobile } from "../atoms/NavMobile";

const Header = () => (
  <header className="bg-black sticky top-0 z-50 w-full h-20">
    <div className="container flex justify-around h-20">
      <HeaderLogo />
      <NavDesktop />
      <HeaderButtons
        className="max-lg:hidden"
        buttonClassName="mr-2 translate-center-y"
      />
      <NavMobile />
    </div>
  </header>
);

export default Header;
