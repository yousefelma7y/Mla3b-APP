/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007063",
        secondary: "#4FC4AB",
        backgroundColor: "#dfdfdf",
        fontColor: "#052e16",
        footer: "#6A8A70",
        background: "var(--background)",
      },
      animation: {
        pulse: "pulse 1s infinite",
      },
      keyframes: {
        pulse: {
          "0%": { opacity: ".1" },
          "30%": { opacity: ".8" },
          "100%": { opacity: ".1" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
