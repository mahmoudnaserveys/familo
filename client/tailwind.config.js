import tailwindcssRtl from 'tailwindcss-rtl';
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8FCFB',
        highlight: '#C9FDD7',
        primary: '#79D1C3',
        header: '#6892D5'
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif']
      }
    }
  },
  plugins: [tailwindcssRtl]
};
