module.exports = {
  container: {
    center: true,
    padding: "1rem",
  },
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
],
 safelist: ['transform', '-scale-x-100', 'scale-y-100'],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
