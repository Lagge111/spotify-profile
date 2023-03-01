/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#1DB954",
        primary_text: "#FFFFFF",
        near_black: "#181818",
        dark_gray: "#282828",
        light_gray: "#B3B3B3",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(180px, 1fr))",
      },
    },
  },
  plugins: [],
};
