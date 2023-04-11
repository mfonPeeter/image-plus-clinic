/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-1": "url('/src/assets/sliders/slider-1.jpg')",
      },
    },
  },
  plugins: [],
};
