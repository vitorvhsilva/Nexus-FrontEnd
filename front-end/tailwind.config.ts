import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cor1': '#304269',
        'cor2': '#476BB9',
        'cor3': '#91BED4',
        'cor4': '#D9E8F5',
        'cor5': '#02A0FF',
        'corFundoCinza': '#F6F6F6',
        'corBranco': '#FFF',
        'corPreto': '#000',
        'corRoxo': '#8C64FF',
        'corVermelho': '#FF1010',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],    
        sm: ['14px', '20px'],    
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],  
        '2xl': ['30px', '36px'],
        '3xl': ['36px', '40px'],
        '4xl': ['48px', '52px'],
        '5xl': ['60px', '64px'],
        footer: ['6px', '10px'],
      }
    },
  },
  plugins: [],
};
export default config;
