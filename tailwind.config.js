module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      bc: "#A2E5FF",
      primary: " #FFFFFF",
      secondary: "#232734",
      danger: "#4E91DE",
      lightGrey: "#3F4354",
    },
    boxShadow: {
      custom: "0 0 10px #F8EF12",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
