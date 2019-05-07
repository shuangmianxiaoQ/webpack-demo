const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const dev = {
  mode: 'development',
  devtool: ' cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    open: true,
    port: 3000,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    usedExports: true
  }
};

module.exports = merge(common, dev);
