const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-dom'],
    vendors: ['lodash']
  },
  output: {
    path: path.resolve(__dirname, '../dll'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dll/[name].manifest.json')
    })
  ],
  performance: false
};
