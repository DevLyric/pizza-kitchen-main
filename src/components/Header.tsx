import { Link } from "react-router-dom";
import NavigationRoutes from "./NavigationRoutes";
import Sidebar from "./Sidebar";
import useSidebar from "../hooks/useSidebar";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

export default function Header() {
  const themeCtx = useTheme();
  const { showSidebar, toggleSidebar } = useSidebar();

  return (
    <header className="flex items-center h-24 shadow-md px-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className={`${themeCtx?.darkMode === "dark" ? "invert" : ""}`}
            src={logo}
            width={50}
            alt=""
          />
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
            className="cursor-pointer z-50"
            src={themeCtx?.darkMode === "dark" ? sun : moon}
            width={28.2}
            alt=""
          />
          <img
            onClick={toggleSidebar}
            className={`cursor-pointer w-6 z-50 lg:hidden ${
              themeCtx?.darkMode === "dark" ? "invert" : ""
            }`}
            src={showSidebar ? close : hamburger}
            alt=""
          />
        </div>
      </div>
      {showSidebar && <Sidebar />}
    </header>
  );
}
