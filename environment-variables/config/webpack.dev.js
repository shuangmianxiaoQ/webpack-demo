const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  devtool: ' cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    open: true,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
