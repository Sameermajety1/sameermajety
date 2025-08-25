/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",     // White background
        secondary: "#4FADF3",   // Light Medical Blue
        accent: "#0047AB",      // Blue
        glow: "#DC143C",        // Red (Crimson)
        light: "#0F172A",       // Dark text
        gray: "#64748B"         // Cool Gray
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