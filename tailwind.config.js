/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/components/card.tsx",
    "./src/components/nome.tsx",
    "./src/layout/screen.tsx",

  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

