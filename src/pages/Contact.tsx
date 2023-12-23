import { useState } from "react";
import { FormDataProps } from "../@types/formData";

function Contact() {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedInput, setFocusedInput] = useState("");

  function handleFocus(field: string) {
    setFocusedInput(field);
  }

  return (
    <div className="flex justify-center mt-12 px-6">
      <div className="w-full max-w-xl">
        <h1 className="font-bold text-3xl mb-4">GET IN TOUCH</h1>
        <p className="tracking-wider">
          Have a question or feedback? We would love to hear from you!
        </p>

        <form action="">
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
              type="text"
              className="w-full p-4 border-2 border-black rounded outline-none"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onFocus={() => handleFocus("name")}
              onBlur={() => setFocusedInput("")}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
