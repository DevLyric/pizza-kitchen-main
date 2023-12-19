import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

function Header() {
  return (
    <header className="flex items-center h-24 shadow-md px-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} width={50} alt="" />
          <Link
            to="/"
            className="pt-3 tracking-wider font-medium hover:text-orange-500"
          >
            Pizza Kitchen
          </Link>
        </div>
        <div className="flex items-center gap-4 lg:gap-20">
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Link
              to="/contact"
              className="tracking-wider font-medium hover:text-orange-500"
            >
              CONTACT
            </Link>
            <Link
              to="/about"
              className="tracking-wider font-medium hover:text-orange-500"
            >
              ABOUT US
            </Link>
            <Link
              to="/login"
              className="tracking-wider font-medium hover:text-orange-500"
            >
              SIGNUP/LOGIN
            </Link>
          </div>
          <img src={moon} className="cursor-pointer z-50" width={28.2} alt="" />
          <img
            src={hamburger}
            className="cursor-pointer z-50 lg:hidden"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
