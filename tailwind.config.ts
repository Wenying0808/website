import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        primary: "#000000",
        heatmap: {
          "5": "#7F0000",
          "4": "#A50026",
          "3": "#D73027",
          "2": "#F46D43",
          "1": "#FD9A6D",
          "0": "#FDDDBC",
        }
      },
      margin:{
        '5': '5px',
      }
    },
  },
  plugins: [],
} satisfies Config;
