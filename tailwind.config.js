/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  important: true,
  plugins: [require("daisyui")],
  daisyui: {},
  content: ["./index.html", "./src/**/*.{,ts,tsx,js}"],
};
