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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
