const merge = require("lodash/merge");
const defaultTheme = require("tailwindcss/defaultTheme");

const configObj = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
};

module.exports = configObj;
