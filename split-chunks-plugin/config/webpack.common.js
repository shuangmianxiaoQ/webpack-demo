const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SplitChunksPlugin',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      // chunks: 'all' -> 对同步和异步代码都进行代码分割
      // chunks: 'async' -> 对异步代码进行代码分割
      // chunks: "initial" -> 对同步代码进行代码分割
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          // 如果对同步代码进行代码分割，需要配置下面的参数
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js'
        },
        default: false
      }
    }
  }
};
