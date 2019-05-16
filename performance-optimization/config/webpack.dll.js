/**
 * 使用命令：`yarn run build:dll`
 * 在`dll`文件夹下生成打包好的第三方模块
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-dom'],
    antd: ['antd'],
    vendors: ['lodash']
  },
  output: {
    path: path.resolve(__dirname, '../dll'),
    filename: '[name].dll.js',
    // 通过`script`标签引入后，可以使用生成的库名
    library: '[name]'
  },
  plugins: [
    // 生成`manifest`映射文件
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dll/[name].manifest.json')
    })
  ],
  performance: false
};
