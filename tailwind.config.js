/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-1": "url('/src/assets/hero-img-1.jpeg')",
      },
    },
  },
  plugins: [],
};
