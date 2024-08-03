/** @type {import('tailwindcss').Config} */
export default {
  content: [`./src/**/*.{html,js,jsx,ts,tsx}`,`./index.html`],
  theme: {
    extend: {
      colors: {
        mainColor: '#1abc9c',
      }
    },
  },
  plugins: [],
}

