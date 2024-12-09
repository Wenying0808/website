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
    },
  },
  plugins: [],
} satisfies Config;
