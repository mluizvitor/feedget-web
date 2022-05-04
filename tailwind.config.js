/* eslint-disable no-undef */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          color: '#8257E5',
          hover: '#996DFF',
          onBrand: '#FFFFFF',
        },
      },
      borderRadius: {
        md: '4px',
      },
      boxShadow: {
        'brandShadow': '0 8px 24px 0px rgba(134,106,229, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
