const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.7xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
