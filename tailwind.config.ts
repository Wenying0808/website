import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
    },
    extend: {
      colors: {
        primary: {
          'light': '#4758DC',
          'dark': '#818CF8',
        },
        secondary: {
          'light': '#E1EBFF', // chip 
          'dark': '#252A33', 
        },
        header: {
          'light':'#404040',
          'dark': '#E5E5E5',
        },
        paragraph: {
         'light': '#757575',
         'dark': '#A3A3A3',
        },
        background:{
          light: {
            '0': '#FFFFFF', // project card, side project card
            '1': '#FBFFFF',
            '2': '#F3FEFF',
            '3': '#EEF3FB',
          },
          dark: {
            '0': '#1F1F1F',
            '1': '#181A20',
            '2': '#1E2027',
            '3': '#252A33',
          }
          
        },
        icon: {
          'light': '#97999C',
          'dark': '#FFFFFF'
        },
        iconButtonHover: {
          'light': '#E1EBFF80', // 50% opacity
          'dark': '#E1EBFF33', // 20% opacity
        }
      },
      boxShadow: {
        'card-hover': '0px 0px 16px rgba(0, 0, 0, 0.2)',
      },
      padding: {
        'section-s': '30px',
        'section-l': '60px'
      },
      margin: {
        'page-top-s': '64px',
        'page-top-l': '80px',
      },
      gap: {
        'section-s': '20px',
        'section-l': '30px',
      }
    },
  },
  plugins: [],
} satisfies Config;
