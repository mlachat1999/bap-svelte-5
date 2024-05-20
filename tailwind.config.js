/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'phone': '450px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'hd': '1920px',
    },
  },
  plugins: [],
}

