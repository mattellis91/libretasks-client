/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
          "dark-purple" : "#081A51",
          "light-white" : "rgba(255,255,255,.18)"
        }
      },
    },
    plugins: [],
  }