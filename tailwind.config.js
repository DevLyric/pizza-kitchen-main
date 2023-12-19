/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ingredients-light": "url('/src/assets/images/ingredients-light.png')",
        "ingredients-dark": "url('/src/assets/images/ingredients-dark.png')",
      },
    },
  },
  plugins: [],
};
