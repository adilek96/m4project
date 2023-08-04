/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "system-ui", "sans-serif"],
      mono: ["Space-mono", "system-ui", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0px 4px 6px 0px #00000026",
      },
    },
  },
  plugins: [],
};
