/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E0122B",
          reddark: "#B80E22",
          black: "#121212",
          cream: "#F6F3EC",
          green: "#25D366",
          greendark: "#128C7E",
        },
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        brush: ["Caveat", "cursive"],
        sans: ["Poppins", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
