import { useTheme } from "../context/ThemeContext";

type InputFieldProps = {
  label: string;
  field: string;
  value: string;
  handleInputChange: (field: string, value: string) => void;
  handleFocus: (field: string) => void;
  focusedInput: string;
  type: "text" | "email" | "textarea"; // Adiciona o tipo "textarea"
};

export const InputField = ({
  label,
  field,
  value,
  handleInputChange,
  handleFocus,
  focusedInput,
  type,
}: InputFieldProps) => {
  const themeCtx = useTheme();

  return (
    <div
      className={`relative flex border-[3px] border-dashed rounded ${
        focusedInput === field || value
          ? "border-orange-500"
          : "border-transparent"
      }`}
    >
      <label
        htmlFor={field}
        className={`absolute left-4 transform -translate-y-1/2 text-orange-500 tracking-wider bg-white font-medium
             ${focusedInput === field || value ? "" : "top-1/2"}
             ${themeCtx?.darkMode === "dark" ? "bg-black" : "bg-white"}`}
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={field}
          className={`w-full p-4 border-2 bg-transparent border-black rounded outline-none
          ${themeCtx?.darkMode === "dark" ? "border-white" : ""}`}
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
          onFocus={() => handleFocus(field)}
          onBlur={() => handleFocus("")}
          autoComplete="off"
          required
        />
      ) : (
        <input
          id={field}
          type={type}
          className={`w-full p-4 border-2 bg-transparent border-black rounded outline-none ${
            themeCtx?.darkMode === "dark" ? "border-white" : ""
          }`}
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
          onFocus={() => handleFocus(field)}
          onBlur={() => handleFocus("")}
          autoComplete="off"
          required
        />
      )}
    </div>
  );
};
