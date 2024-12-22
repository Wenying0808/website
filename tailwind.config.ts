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
        textParagraph:'#757575',
        background:{
          '1': '#FBFFFF',
          '2': '#F3FEFF'
        }
      },
      boxShadow: {
        'card-hover': '0px 0px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
