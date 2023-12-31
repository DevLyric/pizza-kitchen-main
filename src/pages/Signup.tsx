import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import { useTheme } from "../context/ThemeContext";

function Signup() {
  const navigate = useNavigate();
  const themeCtx = useTheme();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [focusedInput, setFocusedInput] = useState("");

  function handleFocus(field: string) {
    setFocusedInput(field);
  }

  async function register(event: FormEvent) {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      navigate("/login");
    } catch {
      console.log("error");
    }
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="w-full max-w-xl px-6">
        <h1 className="text-3xl text-center font-bold py-8">SIGNUP</h1>

        <form action="" onSubmit={register} className="flex flex-col gap-6">
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
               ${themeCtx?.darkMode === "dark" ? "bg-black" : "bg-white"}`}
            >
              Email:
            </label>
            <input
              id="email"
              type="text"
              className={`w-full p-4 border-2 bg-transparent border-black rounded outline-none ${
                themeCtx?.darkMode === "dark" ? "border-white" : ""
              }`}
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
               ${themeCtx?.darkMode === "dark" ? "bg-black" : "bg-white"}`}
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              className={`w-full p-4 border-2 bg-transparent border-black rounded outline-none ${
                themeCtx?.darkMode === "dark" ? "border-white" : ""
              }`}
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

          <div
            className={`relative border-[3px] border-dashed rounded ${
              focusedInput === "passwordConfirmation" ||
              formData.passwordConfirmation
                ? "border-orange-500"
                : "border-transparent"
            }`}
          >
            <label
              htmlFor="passwordConfirmation"
              className={`absolute left-4 transform -translate-y-1/2 text-orange-500 tracking-wider bg-white font-medium
               ${
                 focusedInput === "passwordConfirmation" ||
                 formData.passwordConfirmation
                   ? ""
                   : "top-1/2"
               }
               ${themeCtx?.darkMode === "dark" ? "bg-black" : "bg-white"}`}
            >
              Password Confirmation:
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              className={`w-full p-4 border-2 bg-transparent border-black rounded outline-none ${
                themeCtx?.darkMode === "dark" ? "border-white" : ""
              }`}
              value={formData.passwordConfirmation}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  passwordConfirmation: e.target.value,
                })
              }
              onFocus={() => handleFocus("passwordConfirmation")}
              onBlur={() => setFocusedInput("")}
              autoComplete="off"
              required
            />
          </div>

          <button
            type="submit"
            className={`bg-orange-500 w-32 py-2 rounded self-center ${
              themeCtx?.darkMode === "dark"
                ? "hover:bg-white hover:text-orange-500"
                : "hover:bg-black hover:text-orange-500"
            }`}
          >
            Signup
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 font-medium tracking-wider"
            >
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
