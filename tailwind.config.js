module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#228B22",
        // bgDark: "#2b2a33",
        bgDark: "#27212e",
        hotPink: "#EB64B9",
        darkBorder: "#474747",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
