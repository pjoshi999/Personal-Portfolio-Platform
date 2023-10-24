/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 70px 15px #15396f",
      },
    },
    fontFamily: {
      header: ["IBM Plex Sans", "sans-serif"],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".1em",
      widest: ".25em",
    },
  },
  plugins: [],
};
