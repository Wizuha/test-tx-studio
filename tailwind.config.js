/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        liqgreen: {
          DEFAULT: "#2DCF81"
        },
      }
    }
  }
}