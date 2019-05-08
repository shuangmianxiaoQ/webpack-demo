const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
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
      minSize: 30, // 默认为`30000`字节
      // maxSize: 0,
      minChunks: 1, // 一个模块在生成的`chunk`中至少被引用超过指定次数时，进行代码分割
      maxAsyncRequests: 5, // 加载模块时的最大并行请求数，即最多拆分出5个
      maxInitialRequests: 3, // 入口文件加载时的最大并行请求数，即最多拆分出3个
      automaticNameDelimiter: '~', // 生成的文件名称中间用`~`连接，如`vendors~main.js`
      name: true, // 自动生成基于`chunk`和`cacheGroups`键名组成的文件名称，如`vendors~main.js`
      cacheGroups: {
        // 如果对同步代码进行代码分割，需要在缓存组中添加参数配置
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 针对第三方库中的代码分割
          // priority -> 优先级，比如`default`缓存组的优先级没有`vendors`缓存组高
          // 所以第三方模块会优先打包到`verdors`中
          priority: -10
        },
        default: {
          // minChunks: 2,
          priority: -20,
          // reuseExistingChunk -> 如果满足条件的`chunk`已经存在就重用之前已有的，而不是创建一个新的`chunk`
          reuseExistingChunk: true,
          filename: 'common.js'
        }
      }
    }
  }
};
