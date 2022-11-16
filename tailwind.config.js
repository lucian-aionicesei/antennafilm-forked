module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#1C1C1C',
        'secondary': '#141414',
        'accent1': '#ADDD23'
      },
    },
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
      // 'display': ['ogg-regular', 'serif'],
      // 'display-light': ['ogg-light', 'serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
