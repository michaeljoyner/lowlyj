// https://github.com/michael-ciniawsky/postcss-load-config

// module.exports = {
//   plugins: {
//     // to edit target browsers: use "browserlist" field in package.json
//     autoprefixer: {}
//   }
// };

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss")("./tailwind.js"),
    require("autoprefixer")()
  ]
};
