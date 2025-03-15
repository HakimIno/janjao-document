/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'galaxy-gradient': 'linear-gradient(135deg, #1b1e4b, #2d2d77, #8a3b8f, #f05545)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        aurora: "aurora 60s linear infinite",
        'bubble-rise-1': 'bubbleRise 2.5s ease-in infinite',
        'bubble-rise-2': 'bubbleRise 3.2s ease-in infinite 0.5s',
        'bubble-rise-3': 'bubbleRise 2.8s ease-in infinite 1s',
        'water-wave': 'wave 2s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        bubbleRise: {
          '0%': {
            transform: 'translateY(0) scale(0.8)',
            opacity: '0.5',
          },
          '50%': {
            opacity: '0.8',
          },
          '100%': {
            transform: 'translateY(-100%) scale(1.2)',
            opacity: '0',
          },
        },
        wave: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-2px)',
          },
        },
      },
      colors: {
        galaxyBlue: '#1b1e4b',
        galaxyPurple: '#2d2d77',
        galaxyPink: '#8a3b8f',
        galaxyRed: '#f05545',
      },
      fontFamily: {
        'sf-black': ['SF-Pro-Black', 'sans-serif'],
        'sf-bold': ['SF-Pro-Bold', 'sans-serif'],
        'sf-semibold': ['SF-Pro-Semibold', 'sans-serif'],
        'sf-medium': ['SF-Pro-Medium', 'sans-serif'],
        'sf-regular': ['SF-Pro-Regular', 'sans-serif'],
        'sf-thin': ['SF-Pro-Thin', 'sans-serif'],
        'logo': ['Rubik Moonrocks', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

