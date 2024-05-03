/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'bg-color': '#BFC6CF',
        'text-color': '#011639',
        'logo-text': '#2A2C30',
        'logo-color': '#137AF7',
        'shadow-color': 'rgba(0, 0, 0, 0.308)',
        'button': '#',
        // 'img': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('public/05.jpg')",
      },

    },
  },
  plugins: [],
}


