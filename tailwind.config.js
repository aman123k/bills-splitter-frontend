/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: "Nunito Sans",
        Roboto: "Roboto",
        Poppins: "Poppins",
      },
      backgroundImage: {
        bgImage: "url('./images/bgImage.avif')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
