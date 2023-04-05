/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"]
    },

    extend: {
      padding: {
        "100": "100px"
      }
      // colors: {
      //   light: {
      //     primary: "var(--color-primary-light)",
      //     secondary: "var(--color-secondary-light)"
      //     // add more light theme colors as needed
      //   },
      //   dark: {
      //     primary: "var(--color-primary-dark)",
      //     secondary: "var(--color-secondary-dark)"
      //     // add more dark theme colors as needed
      //   }
      // }
    }
  },
  plugins: []
};
