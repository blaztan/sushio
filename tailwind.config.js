const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        main: ["Raleway", ...defaultTheme.fontFamily.sans],
        custom: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#362E74",
        secondary: "#49742E",
        main: "#FFF5EC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
