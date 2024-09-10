/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "https://fonts.googleapis.com/css2?family=Poppins:wgt@400;500&display=swap"
  ],
  theme: {
    colors: {
      'cor1': '#304269',
      'cor2': '#476BB9',
      'cor3': '#91BED4',
      'cor4': '#D9E8F5',
      'cor5': '#02A0FF',
      'corFundoCinza': '#F6F6F6',
      'corBranco': '#FFF',
      'corPreto': '#000',
      'corRoxo': '#8C64FF'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      footer: ["6px", "10px"],
    }
  },
  plugins: [],
}
