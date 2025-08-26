/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        glow: 'rgb(var(--color-glow) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Raleway', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
} 