module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif'],

    },
    minHeight: {
      'vh-20': '20vh',
      'vh-50': '50vh',
      'vh-80': '80vh',
      'vh-100': '100vh',
    }
  },
  plugins: [],
}
