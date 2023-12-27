import { FormEvent, useState } from "react";
import { FormDataProps } from "../@types/formData";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedInput, setFocusedInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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
          <div
            className={`relative border-[3px] border-dashed rounded ${
              focusedInput === "name" || formData.name
                ? "border-orange-500"
                : "border-transparent"
            }`}
          >
            <label
              htmlFor="name"
              className={`absolute left-4 transform -translate-y-1/2 text-orange-500 tracking-wider bg-white font-medium
               ${focusedInput === "name" || formData.name ? "" : "top-1/2"}
               `}
            >
              First Name:
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-4 border-2 border-black rounded outline-none"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onFocus={() => handleFocus("name")}
              onBlur={() => setFocusedInput("")}
              autoComplete="off"
              required
            />
          </div>
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
              type="email"
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
              focusedInput === "subject" || formData.subject
                ? "border-orange-500"
                : "border-transparent"
            }`}
          >
            <label
              htmlFor="subject"
              className={`absolute left-4 transform -translate-y-1/2 text-orange-500 tracking-wider bg-white font-medium
               ${
                 focusedInput === "subject" || formData.subject ? "" : "top-1/2"
               }
               `}
            >
              Subject:
            </label>
            <input
              id="subject"
              type="text"
              className="w-full p-4 border-2 border-black rounded outline-none"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              onFocus={() => handleFocus("subject")}
              onBlur={() => setFocusedInput("")}
              autoComplete="off"
              required
            />
          </div>
          <div
            className={`relative flex border-[3px] border-dashed rounded ${
              focusedInput === "message" || formData.message
                ? "border-orange-500"
                : "border-transparent"
            }`}
          >
            <label
              htmlFor="message"
              className={`absolute left-4 transform -translate-y-1/2 text-orange-500 tracking-wider bg-white font-medium
               ${
                 focusedInput === "message" || formData.message ? "" : "top-1/2"
               }
               `}
            >
              Message:
            </label>
            <textarea
              id="message"
              className="w-full p-4 border-2 border-black rounded outline-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              onFocus={() => handleFocus("message")}
              onBlur={() => setFocusedInput("")}
              autoComplete="off"
              required
            />
          </div>
          <button className="self-center sm:self-start py-2 w-28 rounded font-medium bg-orange-500">
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
