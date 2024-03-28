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
      },

      fontFamily: {
        display: ["Rubik", "Helvetica", "sans"],
      },
      // https://uicolors.app/createł
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
