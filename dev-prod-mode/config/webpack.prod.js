const merge = require('webpack-merge');
const common = require('./webpack.common');

const prod = {
  mode: 'production',
  devtool: ' cheap-module-source-map'
};

module.exports = merge(common, prod);
