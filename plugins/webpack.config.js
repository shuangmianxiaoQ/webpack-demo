const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  // mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            limit: 4096
          }
        }
      },
      {
        test: /\.css$/,
        // 生产阶段使用`MiniCssExtractPlugin`插件
        use: [MiniCssExtractPlugin.loader, 'css-loader']
        // use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner:
        'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify('development'),
      __PROD__: JSON.stringify('production'),
      __VERSION__: JSON.stringify('v1.0.0')
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugins',
      template: 'src/index.html'
    }),
    new BundleAnalyzerPlugin({
      // analyzerMode: 'static' -> 在输出和`bundle`中生成一个`report.html`文件
      analyzerMode: 'server',
      analyzerPort: 666,
      openAnalyzer: false
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      context: 'src',
      // 不使用`scss`时，需要修改该参数匹配规则
      files: '**/*.css'
    }),
    new CopyPlugin([{ from: 'src/styles', to: 'styles' }]),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin()
  ]
};
