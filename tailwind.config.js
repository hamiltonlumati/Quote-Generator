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
      'amber': '#d97706',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'cyan': '#22d3ee',
      'orange': '#ff7849',
      'green': '#13ce66',
      'green-dark': '#16a34a',
      'yellow': '#eab308',
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
  safelist: [
    //bg
    'bg-amber',
    'bg-blue',
    'bg-purple',
    'bg-pink',
    'bg-orange',
    'bg-green',
    'bg-yellow',
    'bg-gray',
    'bg-amber',
    'bg-green-dark',
    'bg-cyan',

    //text
    'text-amber',
    'text-blue',
    'text-purple',
    'text-pink',
    'text-orange',
    'text-green',
    'text-yellow',
    'text-gray',
    'text-amber',
    'text-cyan'

  ]
}

