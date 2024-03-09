/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1rem",
      // screens: {
      //   sm: "600px",
      //   md: "728px",
      //   lg: "800px",
      //   xl: "800px",
      //   "2xl": "800px",
      // },
    },
  },
  plugins: [
    // plugin(function ({ addBase, theme }) {
    //   addBase({
    //     a: { color: theme("colors.purple.200") },
    //     "a:hover": { textDecoration: "underline" },
    //   });
    // }),
  ],
};
