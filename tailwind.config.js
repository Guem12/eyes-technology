/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec6ff',
          400: '#59a6ff',
          500: '#3385fc',
          600: '#1c66f2',
          700: '#1551e0',
          800: '#1843b4',
          900: '#1a3c8e',
          950: '#142454',
        },
        accent: {
          50: '#ecfeff',
          100: '#cff7fe',
          200: '#a4eefc',
          300: '#67e0f8',
          400: '#22ccee',
          500: '#06b6d4',
          600: '#0892b0',
          700: '#0e748c',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          'from': { 'box-shadow': '0 0 20px -10px rgba(51,133,252,0.5)' },
          'to': { 'box-shadow': '0 0 30px 0px rgba(51,133,252,0.6)' },
        },
      },
    },
  },
  plugins: [],
};
