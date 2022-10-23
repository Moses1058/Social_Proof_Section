/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        ds: '1440px',
      },
      colors: {
        card_bg: 'hsl(300, 43%, 22%)',
        verified: 'hsl(333, 80%, 67%)',
        rating: 'hsl(303, 10%, 53%)',
        text_color: 'hsl(300, 24%, 96%)',
      },
      fontFamily: {
        main: 'League Spartan',
      },
    },
  },
  plugins: [],
}
