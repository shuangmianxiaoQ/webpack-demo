const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            // placeholder 占位符
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            // 小于`4k`的图片使用`base64`的方式直接打包到`bundle.js`中
            // 超过`4k`的图片使用`file-loader`打包
            limit: 4096
          }
        }
      }
    ]
  }
};
