/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#F9F9F9', // Branco sujo
          100: '#F1F1F1', // Cinza muito claro
          200: '#D1D1D1', // Cinza suave
          300: '#B0B0B0', // Cinza médio
          400: '#8F8F8F', // Cinza escuro
          500: '#6E6E6E', // Cinza mais escuro
          600: '#4D4D4D', // Cinza profundo
          700: '#333333', // Cinza muito escuro
          800: '#1A1A1A', // Quase preto
          900: '#0A0A0A', // Preto
        },
      },
      fontFamily: {     
        serif: ['Playfair Display', 'serif'], // Fonte sofisticada para títulos
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'], // Fonte limpa e moderna
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.813rem', { lineHeight: '1.25rem' }],
        'base': ['0.875rem', { lineHeight: '1.5rem' }],
        'lg': ['1rem', { lineHeight: '1.75rem' }],
        'xl': ['1.125rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.25rem', { lineHeight: '2rem' }],
        '3xl': ['1.5rem', { lineHeight: '2rem' }],
        '4xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '5xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '6xl': ['2.75rem', { lineHeight: '1' }],
        '7xl': ['3.25rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};