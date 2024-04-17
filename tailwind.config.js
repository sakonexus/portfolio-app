/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{html,js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
    './src/**/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        link: '0px 0px 1.5rem .25rem rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [],
};
