/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        mainYellow: "#EDA415",
        mainRed: "#C33131",
        mainBlue: "#00ABF0",
        mainDarkBg: "#081B29",
        secondDarkBg: "#112E42",
        customWhiteText: "#EDEDED",
        yellowgreen: "#9ACD32",
      },
    },
  },
  plugins: [],
};
