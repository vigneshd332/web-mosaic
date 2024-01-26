const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      cera: ["CeraPro", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      ...colors,
      whi: "#FFFFFA",
    },
    plugins: [],
  },
};
