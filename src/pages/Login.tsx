import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { loginAuth, logoutAuth } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [focusedInput, setFocusedInput] = useState("");

  function handleFocus(field: string) {
    setFocusedInput(field);
  }

  async function login(event: FormEvent) {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      loginAuth();
      localStorage.setItem("email", formData.email);
      navigate("/");
      window.location.reload();
    } catch {
      logoutAuth();
      localStorage.removeItem("email");
      console.log("error");
    }
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="w-full max-w-xl px-6">
        <h1 className="text-3xl text-center font-bold py-8">LOGIN</h1>

        <form action="" onSubmit={login} className="flex flex-col gap-6">
          <div
            className={`relative border-[3px] border-dashed rounded ${
              focusedInput === "email" || formData.email
                ? "border-orange-500"
                : "border-transparent"
            }`}
          >
            <label
              htmlFor="email"
              className={`absolute left-4 transform -translate-y-1/2 text-orange-500 tracking-wider bg-white font-medium
               ${focusedInput === "email" || formData.email ? "" : "top-1/2"}
               `}
            >
              Email:
            </label>
            <input
              id="email"
              type="text"
              className="w-full p-4 border-2 border-black rounded outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onFocus={() => handleFocus("email")}
              onBlur={() => setFocusedInput("")}
              autoComplete="off"
              required
            />
          </div>

          <div
            className={`relative border-[3px] border-dashed rounded ${
              focusedInput === "password" || formData.password
                ? "border-orange-500"
                : "border-transparent"
            }`}
          >
            <label
              htmlFor="password"
              className={`absolute left-4 transform -translate-y-1/2 text-orange-500 tracking-wider bg-white font-medium
               ${
                 focusedInput === "password" || formData.password
                   ? ""
                   : "top-1/2"
               }
               `}
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-4 border-2 border-black rounded outline-none"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              onFocus={() => handleFocus("password")}
              onBlur={() => setFocusedInput("")}
              autoComplete="off"
              required
            />
          </div>

          <button className="bg-orange-500 w-32 py-2 rounded self-center">
            Login
          </button>

          <div className="text-center flex flex-col gap-2">
            <Link
              to="/forgot-your-password"
              className="text-orange-500 font-medium tracking-wider"
            >
              Forgot your password?
            </Link>
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-orange-500 font-medium tracking-wider"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
