/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#171717",
        white: "#F7FFF9",
        seconadry: "#6A1F6A",
        primary: "#FF8400",
        accent: "#A23405",
      },

      fontFamily: {
        display: ["Rubik", "Helvetica", "sans"],
        pretty: ["Rock Salt", "Cursive", "sans"],
        modern: ["Inter", "sans-serif", "sans"],
      },
      // https://uicolors.app/createł
    },
  },
  plugins: [require("tailwind-hamburgers"), require("@tailwindcss/forms")],
};
