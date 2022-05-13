/* eslint-disable no-undef */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'script': ['Great Vibes', 'serif'],
      },
      colors: {
        aux: {
          pink: '#E56ACB',
          'pink-dark': '#89407A',
          'brand-dark': '#4E3489',
        },
        brand: {
          color: '#8257E5',
          hover: '#996DFF',
          'on-brand': '#FFFFFF',
        },
        light: {
          app: '#f4f4f5',
          surface: {
            primary: '#FFFFFF',
            secondary: '#f4f4f5',
            'secondary-hover': '#e4e4e7',
          },
          stroke: '#d4d4d8',
          tooltip: '#27272a',
          text: {
            primary: '#27272a',
            secondary: '#71717a',
            'on-tooltip': '#f4f4f5',
          },
        },
        dark: {
          app: '#09090A',
          surface: {
            primary: '#18181b',
            secondary: '#27272a',
            'secondary-hover': '#3f3f46',
          },
          stroke: '#52525b',
          tooltip: '#f4f4f5',
          text: {
            primary: '#f4f4f5',
            secondary: '#a1a1aa',
            'on-tooltip': '#27272a',
          },
        },
      },
      borderRadius: {
        md: '4px',
      },
      boxShadow: {
        'brand-shadow': '0 8px 24px 0px rgba(134,106,229, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
