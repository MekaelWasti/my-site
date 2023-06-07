const path = require("path");

module.exports = {
  mode: "development", //'production' for production build'
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Matches .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      https: require.resolve("https-browserify"),
    },
  },
  // ...
};
