module.exports = {
  entry: "./src/example.js",
  output: {
    path: __dirname + '/lib',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
