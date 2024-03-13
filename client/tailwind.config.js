const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display"],
      nexa: ["Nexa"],
    },
    extend: {
      colors: {
        neutral: {
          50: "#FFF",
          100: "#B8B8B8",
          200: "#373737",
          300: "#181818",
          400: "#000",
        },
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }
        md: "1025px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  // darkMode: 'class',
  plugins: [nextui()],
};
