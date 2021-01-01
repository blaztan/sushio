const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        main: ["Be Vietnam", ...defaultTheme.fontFamily.sans],
        custom: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#362E74",
        secondary: "#49742E",
        main: "#FFF5EC",
        "secondary-100": "rgba(73, 116, 46, .75)",
        "light-white": "rgba(255,255,255,.46)",
        "main-100": "#FFEDDE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
