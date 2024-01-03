import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function NavigationRoutes() {
  const { isAuthenticated, logoutAuth } = useAuth();
  const user = localStorage.getItem("email");

  return (
    <>
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
      {isAuthenticated ? (
        <>
          <p className="tracking-wider font-medium hover:text-orange-500 cursor-pointer">
            SIGNED IN AS {user?.toUpperCase()}
          </p>
          <button
            onClick={logoutAuth}
            className="tracking-wider font-medium hover:text-orange-500"
          >
            LOG OUT
          </button>
        </>
      ) : (
        <Link
          to="/login"
          className="tracking-wider font-medium hover:text-orange-500 cursor-pointer"
        >
          SIGNUP/LOGIN
        </Link>
      )}
    </>
  );
}
