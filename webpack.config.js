var path = require("path");

module.exports = [{
  entry: "./src/example.jsx",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, '/lib'),
    filename: "example.js",
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}, {
  entry: "./src/gravatar.jsx",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, '/lib'),
    filename: "gravatar.js",
    libraryTarget: "umd",
    library: "react-gravatar"
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}];
