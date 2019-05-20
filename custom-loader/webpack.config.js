const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    // 查找`loader`的顺序
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          'replcaeLoader',
          {
            loader: 'replcaeLoaderAsync',
            options: {
              name: 'shuangmianxiaoQ'
            }
          }
        ]
      }
    ]
  }
};
