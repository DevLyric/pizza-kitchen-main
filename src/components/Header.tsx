import { Link } from "react-router-dom";
import NavigationRoutes from "./NavigationRoutes";
import Sidebar from "./Sidebar";
import useSidebar from "../hooks/useSidebar";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

function Header() {
  const themeCtx = useTheme();
  const { showSidebar, toggleSidebar } = useSidebar();

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
