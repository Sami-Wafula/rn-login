// tailwind.config.js
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
            'ua-purple': '#8067AD',
            'ua-grey': '#A0A09F',
            'ua-matte-black': '#3333',
            'ua-white': '#fffff',
            'ua-blue': '#0072BD',
          },
      },
    },
    plugins: ["tailwindcss-react-native/babel"],
};