/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        market: {
          "primary": "#f97316", // orange-500
          "secondary": "#0ea5e9", // sky-500
          "accent": "#22c55e", // green-500
          "neutral": "#111827", // gray-900 for strong contrast
          "base-100": "#ffffff",
          "info": "#38bdf8",
          "success": "#16a34a",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
}

