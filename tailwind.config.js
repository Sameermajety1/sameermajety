/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",     // White background
        secondary: "#4FADF3",   // Light Medical Blue (replacing Gold #E5B80B)
        accent: "#0047AB",      // Blue
        glow: "#DC143C",        // Red (Crimson)
        light: "#0F172A",       // Dark text (reverse of previous)
        gray: "#64748B"         // Cool Gray
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-raleway)', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
} 