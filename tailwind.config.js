// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 6px rgba(255, 0, 90, 0.8)",
      },
    },
  },
  plugins: [],
};
