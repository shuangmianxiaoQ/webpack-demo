const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: ' cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
    port: 3000,
    hot: true,
    hotOnly: true // HMR未生效，浏览器也不自动刷新
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    // 使用`HotModuleReplacementPlugin`
    new webpack.HotModuleReplacementPlugin()
  ]
};
