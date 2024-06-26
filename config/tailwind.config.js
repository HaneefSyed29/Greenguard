const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // content: [
  //   './public/*.html',
  //   './app/helpers/**/*.rb',
  //   './app/javascript/**/*.js',
  //   './app/views/**/*.{erb,haml,html,slim}'
  // ],
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        khand: ["Khand", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
