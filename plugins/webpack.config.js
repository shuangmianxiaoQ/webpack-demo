const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    quiet: true
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
        // use: ['style-loader', 'css-loader']
        // 生产阶段使用`MiniCssExtractPlugin`插件
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    // 生产环境中，在此处开启代码压缩优化
    minimizer: [
      new TerserPlugin({
        // 保留并提取注释
        terserOptions: {
          output: { comments: /^\**!|@preserve|@license|@cc_on/i }
        },
        extractComments: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano')
      })
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
    new ProgressBarPlugin({
      clear: false
    }),
    new CopyPlugin([{ from: 'src/styles', to: 'styles' }]),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running at http://localhost:8080'],
        notes: [
          'Some additional notes to be displayed upon successful compilation'
        ]
      },
      clearConsole: true
    }),
    // 优化 `moment` 本地化文件导致打包后体积过大的问题
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
    new webpack.ProvidePlugin({
      // 全局注入 jquery, lodash.map
      $: 'jquery',
      jQuery: 'jquery',
      _map: ['lodash', 'map']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin()
  ]
};
