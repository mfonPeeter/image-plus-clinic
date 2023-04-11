/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-1": "url('/src/assets/sliders/slider-1.jpg')",
        "eye-clinic": "url('/src/assets/summary/eye-clinic.jpg')",
        services: "url('/src/assets/summary/services.jpg')",
        "visit-us": "url('/src/assets/summary/visit-us.jpg')",
      },
    },
  },
  plugins: [],
};
