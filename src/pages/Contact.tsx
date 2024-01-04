import { FormEvent, useState } from "react";
import { FormDataProps } from "../@types/formData";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";
import { InputField } from "../components/InputField";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const navigate = useNavigate();
  const themeCtx = useTheme();
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedInput, setFocusedInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  function handleFocus(field: string) {
    setFocusedInput(field);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-full max-w-xl px-6">
        <h1 className="font-bold text-3xl mb-4 text-center sm:text-left">
          GET IN TOUCH
        </h1>
        <p className="mb-4 tracking-wider text-center sm:text-left">
          Have a question or feedback? We would love to hear from you!
        </p>

        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InputField
            label="First Name:"
            field="name"
            value={formData.name}
            handleInputChange={handleInputChange}
            handleFocus={handleFocus}
            focusedInput={focusedInput}
            type="text"
          />
          <InputField
            label="Email:"
            field="email"
            value={formData.email}
            handleInputChange={handleInputChange}
            handleFocus={handleFocus}
            focusedInput={focusedInput}
            type="email"
          />
          <InputField
            label="Subject:"
            field="subject"
            value={formData.subject}
            handleInputChange={handleInputChange}
            handleFocus={handleFocus}
            focusedInput={focusedInput}
            type="text"
          />
          <InputField
            label="Message:"
            field="message"
            value={formData.message}
            handleInputChange={handleInputChange}
            handleFocus={handleFocus}
            focusedInput={focusedInput}
            type="textarea"
          />
          <button
            className={`self-center sm:self-start py-2 w-28 rounded font-medium bg-orange-500
          ${
            themeCtx?.darkMode === "dark"
              ? "hover:bg-white hover:text-orange-500"
              : "hover:bg-black hover:text-orange-500"
          }`}
          >
            Send
          </button>
        </form>
      </div>
      <footer className="w-full mt-20 py-8 flex flex-col gap-8 bg-orange-500 lg:flex-row lg:justify-around lg:py-0">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16 lg:py-8">
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="my-2 text-xl text-white font-semibold">CALL US</h1>
            <span className="text-white font-medium">+34 108 231 4622</span>
            <span className="text-white font-medium">+34 127 220 3094</span>
          </div>

          <div className="flex flex-col text-center lg:text-left">
            <h1 className="my-2 text-xl text-white font-semibold lg:my-0 lg:mb-4">
              LOCATION
            </h1>
            <span className="text-white font-medium">
              35 Main St, The City, TH 4502 H2
            </span>
          </div>

          <div className="flex flex-col text-center lg:text-left">
            <h1 className="my-2 text-xl text-white font-semibold">
              BUSINESS HOURS
            </h1>
            <span className="text-white font-medium">Monday: Closed</span>
            <span className="text-white font-medium">
              Tuesday - Sunday: 11am - 22pm
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <img
            src={facebook}
            className="w-6 cursor-pointer hover:scale-110 invert"
            alt=""
          />
          <img
            src={twitter}
            className="w-6 cursor-pointer hover:scale-110 invert"
            alt=""
          />
          <img
            src={instagram}
            className="w-6 cursor-pointer hover:scale-110 invert"
            alt=""
          />
          <img
            src={pinterest}
            className="w-6 cursor-pointer hover:scale-110 invert"
            alt=""
          />
        </div>
      </footer>
      {showPopup && <Popup name={formData.name} />}
    </div>
  );
}

export default Contact;
