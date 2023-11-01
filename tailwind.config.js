/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      screens: {
         'sm':'280px',
         'md':'760px',
         'lg':'1024px',
         'xl':'1440px',
      },

      fontFamily: {
          'PT-serif': ['PT Serif, sans-serif'],
          'Poppins': ['Poppins, sans-serif'],
      },

      fontWeight: {
        '700':'700',
        '600':'600',
        '400':'400',
      },

      fontSize: {
          '36':'36px',
          '18':'18px',
          '12':'12px',
      },

      lineHeight: {
         '47':'47.7px',
         '27':'27px',
      },

      letterSpacing: {
        '-4':'-4.5px'
      },

      width: {
        '278':'278px',
      },

      height: {
        '47':'47px',
      },

      spacing: {
        '110':'110px',
        '243':'243px',
        '-54':'-200px',
        '-94':'-370px',
        '-96':'-440px',
        '-17':'-66px',
      },
    },
  },
  plugins: [],
}

