/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        roboto: "'Roboto', sans-serif",
        sourceSansPro: "'Source Sans Pro', sans-serif",
      },
      colors: {
        primary: "#38bdf8",
        secondary: "#020617",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
