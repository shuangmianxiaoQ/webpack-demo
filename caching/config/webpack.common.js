const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    // 业务代码和`vendor`代码之间使用`manifest`来做关联
    // 旧版本`webpack`中，可能两次业务代码一样，但打包后`contenthash`不一样
    // `runtimeChunk`会将`manifest`相关的代码分离出来单独打包，保证代码一样时`contenthash`也一样
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    }
  }
};
