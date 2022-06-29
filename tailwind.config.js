/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#112A40",
        secondary: "#000000",
      },
      opacity: {
        15: 0.15,
      },
      textColor: {
        primary: "#ffffff",
        secondary: "#ffffff80",
        tertiary: "#D89F2A",
      },
    },
  },
  plugins: [],
};
