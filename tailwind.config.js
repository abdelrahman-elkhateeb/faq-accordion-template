/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        lightPink: "var(--light-pink)",
        grayishPurple: "var(--grayish-purple)",
        darkPurple: "var(--dark-purple)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
