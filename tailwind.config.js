/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#051b38',
          DEFAULT: '#082B59',
          800: '#082B59',
          700: '#0b3975',
        },
        royal: {
          DEFAULT: '#0868B2',
          600: '#0868B2',
          500: '#0a7cd4',
        },
        techblue: {
          DEFAULT: '#078BCB',
          400: '#078BCB',
          300: '#18a4e8',
        },
        cyan: {
          DEFAULT: '#26B5D8',
          400: '#26B5D8',
          300: '#48c7e6',
        },
        gold: {
          DEFAULT: '#DDA43A',
          500: '#DDA43A',
          400: '#e5b352',
          600: '#c5902c',
        },
        ivory: {
          DEFAULT: '#FAF8F2',
          50: '#FAF8F2',
          100: '#f5f1e6',
        },
        lightblue: {
          DEFAULT: '#EDF6FC',
          50: '#EDF6FC',
          100: '#dbeef9',
        },
        body: {
          DEFAULT: '#26364B',
        },
        muted: {
          DEFAULT: '#65748A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(8, 43, 89, 0.08)',
        'card': '0 10px 30px -4px rgba(8, 43, 89, 0.08), 0 4px 12px -2px rgba(8, 43, 89, 0.03)',
        'elevated': '0 20px 40px -8px rgba(8, 43, 89, 0.14), 0 8px 16px -4px rgba(8, 43, 89, 0.05)',
        'gold-glow': '0 0 25px rgba(221, 164, 58, 0.35)',
        'blue-glow': '0 0 25px rgba(7, 139, 203, 0.35)',
      },
      maxWidth: {
        'site': '1320px',
      }
    },
  },
  plugins: [],
}
