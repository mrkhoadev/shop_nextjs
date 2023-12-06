/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      backgroundColor: {
        light: {
          primary: {
            100: "#FFA500",
            200: "#dd8900",
            300: "#808080",
          },
          accent: {
            100: "#C0C0C0",
            200: "#626262",
          },
          100: "#F7F7F7",
          200: "#ededed",
          300: "#c4c4c4",
          400: "rgba(247, 247, 247, 0.9)",
          500: "rgba(30, 30, 30, 0.5)",
        },
        dark: {
          primary: {
            100: "#FFD700",
            200: "#ddb900",
            300: "#917800",
          },
          accent: {
            100: "#c49216",
            200: "#5e3b00",
          },
          100: "#1E1E1E",
          200: "#2d2d2d",
          300: "#454545",
          400: "rgba(30, 30, 30, 0.9)",
          500: "rgba(247, 247, 247, 0.5)",
        },
        100: "#333333",
        200: "#ffa50033",
      },
    },
    textColor: {
      light: {
        100: "#333333",
        200: "#5c5c5c",
      },
      dark: {
        100: "#dcdcdc",
        200: "#929292",
      },
      100: "#FFA500",
    },
    fontFamily: {
      display: ["boxicons"],
    },
    colors: {
      yellow: "#FFA500",
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#F7F7F7",
            foreground: "#333333",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#333333",
            foreground: "#dcdcdc",
          },
        },
      },
    }),
  ],
};
