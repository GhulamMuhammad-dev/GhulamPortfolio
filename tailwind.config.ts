import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background_color:"#111119",
        primary: '#3a506b',
        primary_hover: '#1c2541',
        secondary: '#9d4edd',
        secondary_hover: '#3c096c',

      },

      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },

      fontSize: {
        'hero': ['5rem', { lineHeight: '1.2' }], // 80px with custom line height
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(352deg, rgba(17,17,25,1) 0%, rgba(26,117,159,1) 0%, rgba(153,217,140,1) 54%, rgba(217,237,146,1) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;


