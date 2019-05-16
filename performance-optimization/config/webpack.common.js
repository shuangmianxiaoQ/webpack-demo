const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 读取`dll`文件夹下的所有文件
const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
// console.log(files);

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Performance Optimization',
    template: 'src/index.html'
  }),
  new CleanWebpackPlugin()
];

files.forEach(file => {
  // 如果匹配到`xxx.dll.js`的文件，将其添加到`AddAssetHtmlPlugin`插件
  if (/.*\.dll\.js$/.test(file)) {
    plugins.push(
      // 将打包好的第三方模块通过`<script>`标签添加到`index.html`中
      new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, '../dll', file)
      })
    );
  }

  // 如果匹配到`xxx.manifest.json`的文件，将其添加到`DllReferencePlugin`插件
  if (/.*\.manifest\.json$/.test(file)) {
    plugins.push(
      // 引入`dll`文件夹下生成的`manifest`映射文件
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, '../dll', file)
      })
    );
  }
});

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // mainFiles: ['index', 'child']
    alias: {
      Child: path.resolve(__dirname, '../src/child/')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins,
  optimization: {
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
