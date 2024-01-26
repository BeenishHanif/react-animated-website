/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#color1", // replace with the actual color value
        "gradient-end": "#color2", // replace with the actual color value
      },
    },
    fontFamily: {
      body: ["Nunito"],
    },
  },
  plugins: [],
};
