/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      mid: "900px",
      mid2: "800px",
      xl: "1200px",
    },
    colors: {
      primary: "#713C25",
      color1: "#BE6C42",
      color2: "#F7E7CE",
      color3: "#E2D2B7",
      color1dark: "#853818",
    },
    extend: {},
  },
  plugins: [],
};
