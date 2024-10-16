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
        footer: "#63695B",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
