/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#313e51",
        utilities: "#a529f4",
        answerbgcolor: "#a629f5",
        answerbgcolorhover: "#8529f5",
        textcolor: "#dfe5ef",
        lightpurple: "#f1e7fb",
        darkblue: "#2d3949",
      },
    },
  },
  plugins: [],
};
