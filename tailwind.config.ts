import type { Config } from "tailwindcss";

export default {
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
        primary: '#4758DC',
        secondary: '#E1EBFF',
        paragraph:'#757575',
        header: '#221F20',
        background:{
          '1': '#FBFFFF',
          '2': '#F3FEFF',
          '3': '#EEF3FB',
        }
      },
      boxShadow: {
        'card-hover': '0px 0px 16px rgba(0, 0, 0, 0.2)',
      },
      padding: {
        'section': '60px'
      },
      margin: {
        'page-top-s': '64px',
        'page-top-l': '80px',
      },
      gap: {
        'section': '20px'
      }
    },
  },
  plugins: [],
} satisfies Config;
