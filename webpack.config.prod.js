var path = require("path");

module.exports = {
  entry: "./src/gravatar.jsx",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "gravatar.min.js",
    libraryTarget: "umd",
    library: "react-circle-gravatar"
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
