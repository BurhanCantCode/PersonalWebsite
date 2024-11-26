/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
          dark: "#e5e5e5"
        },
        secondary: {
          DEFAULT: "rgba(255, 255, 255, 0.7)",
          dark: "rgba(255, 255, 255, 0.5)"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          background: 'rgba(0, 0, 0, 0.7)',
          'backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.55)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.85)',
          'backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.03)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.75)',
        },
      })
    }
  ],
}; 