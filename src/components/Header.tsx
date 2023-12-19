import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    function changeWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", changeWidth);

    if (screenWidth > 1024) {
      setShowSidebar(false);
    }

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth]);

  function toggleSidebar() {
    setShowSidebar((current) => !current);
  }

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
            onClick={toggleSidebar}
            src={hamburger}
            className="cursor-pointer z-50 lg:hidden"
            alt=""
          />
        </div>
      </div>
      {showSidebar && (
        <div className="absolute top-0 right-0 h-screen w-2/3 bg-orange-500">
          <div className="flex flex-col gap-8 mt-52 mx-8">
            <Link
              to="/contact"
              className="w-max tracking-wider font-medium hover:text-white"
            >
              CONTACT
            </Link>
            <Link
              to="/about"
              className="w-max tracking-wider font-medium hover:text-white"
            >
              ABOUT US
            </Link>
            <Link
              to="/login"
              className="w-max tracking-wider font-medium hover:text-white"
            >
              SIGNUP/LOGIN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
