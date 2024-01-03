import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import { useTheme } from "../context/ThemeContext";
import NavigationRoutes from "./NavigationRoutes";
import Sidebar from "./Sidebar";

function Header() {
  const themeCtx = useTheme();
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
            <NavigationRoutes />
          </div>
          <img
            onClick={themeCtx?.toggleTheme}
            src={moon}
            className="cursor-pointer z-50"
            width={28.2}
            alt=""
          />
          <img
            onClick={toggleSidebar}
            src={hamburger}
            className="cursor-pointer z-50 lg:hidden"
            alt=""
          />
        </div>
      </div>
      {showSidebar && <Sidebar />}
    </header>
  );
}

export default Header;
