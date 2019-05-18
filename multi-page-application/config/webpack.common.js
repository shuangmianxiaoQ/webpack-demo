const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 动态的增加`HtmlWebpackPlugin`，`AddAssetHtmlPlugin`和`DllReferencePlugin`插件
const generatePlugins = configs => {
  const plugins = [new CleanWebpackPlugin()];
  const files = fs.readdirSync(path.resolve(__dirname, '../dll'));

  // 根据入口动态添加`HtmlWebpackPlugin`插件
  Object.keys(configs.entry).forEach(page => {
    plugins.push(
      new HtmlWebpackPlugin({
        title: 'Multi Page Application Bundler',
        template: 'src/index.html',
        filename: `${page}.html`,
        chunks: ['runtime', 'vendors', page]
      })
    );
  });

  files.forEach(file => {
    if (/.*\.dll\.js$/.test(file)) {
      plugins.push(
        new AddAssetHtmlPlugin({
          filepath: path.resolve(__dirname, '../dll', file)
        })
      );
    }

    if (/.*\.manifest\.json$/.test(file)) {
      plugins.push(
        new webpack.DllReferencePlugin({
          manifest: path.resolve(__dirname, '../dll', file)
        })
      );
    }
  });

  return plugins;
};

const configs = {
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    other: './src/other.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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

configs.plugins = generatePlugins(configs);

module.exports = configs;
