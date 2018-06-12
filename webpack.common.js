const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'james',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise'
    })
  ]
};
