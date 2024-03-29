let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ] 
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ]
};

module.exports = config;