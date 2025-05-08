/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50:  '#F4F8FB', // Azul serenity muito claro
          100: '#DCEBF5', // Azul serenity leve
          200: '#B5D5EA', // Azul serenity base
          300: '#8DBFDF', // Azul serenity médio
          400: '#68A5CC', // Transição para azul clássico
          500: '#3C7BA3', // Azul serenity profundo
          600: '#2A5D87', // Azul marinho suave
          700: '#1F4668', // Azul marinho clássico
          800: '#16324D', // Azul marinho escuro
          900: '#0D2133', // Azul marinho profundo
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