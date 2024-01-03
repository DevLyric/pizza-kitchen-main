import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="absolute top-0 right-0 h-screen w-2/3 bg-orange-500 z-40">
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
  );
}
