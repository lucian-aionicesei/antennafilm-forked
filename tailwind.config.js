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
        'primary': '#181818',
        'secondary': '#121212',
        'accent1': '#35B597'
      },
    },
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
      'abril': ['abril', 'sans-serif'],
      // 'display': ['ogg-regular', 'serif'],
      // 'display-light': ['ogg-light', 'serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
