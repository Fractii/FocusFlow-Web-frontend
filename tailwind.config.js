// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#323234', // Define your custom color here
        customGray2: '#2A292F', // Define your custom color here
        customBlue: '#04c1fb', // Define your custom color here
        // Add more custom colors if needed
      },
    },
  },
  plugins: [],
};
