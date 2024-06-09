/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: {
          light: "#9ef1e9",
          DEFAULT: "#60e8d6",
        },
        customRed: {
          light: "#ffd3e6",
          DEFAULT: "#ffb5d1",
        },
        customYellow: {
          light: "#fff3df",
          DEFAULT: "#ffe4b1",
        },
        customBlack: {
          light: "#dfe0da",
          DEFAULT: "#2e291b",
        },
        customWhite: {
          DEFAULT: "#ffffff",
        },
      },
      fontFamily: {
        title: ["Satisfy", "serif"],
        body: ["Inconsolata", "monospace"],
      },
      height: {
        almostFull: "93%",
        medium: "120px",
      },
    },
    plugins: [],
  },
};
