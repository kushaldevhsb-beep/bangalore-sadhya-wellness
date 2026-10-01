/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#16281e',       // Deep Forest Green
          dark: '#16281e',         // Deep Forest Green (alias)
          'dark-alt': '#1f382b',
          olive: '#627551',        // Natural Olive
          green: '#708b77',        // Healing Sage Green
          emerald: '#4d997b',
          cream: '#fcfaf6',        // Warm Cream
          linen: '#f7f4ee',        // Soft Linen
          beige: '#e8e2d8',        // Earth Beige
          sand: '#ded7cb',         // Natural Stone
          gold: '#c5a059',         // Muted Himalayan Gold
          'gold-light': '#dfc385',
          slate: '#263a2f',
          footer: '#16281e',       // Deep Forest Green Footer
        }
      },
      fontFamily: {
        serif: ['"Hedvig Letters Serif"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
