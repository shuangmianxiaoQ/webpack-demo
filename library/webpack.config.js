const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library', // 可以通过`<script>`标签引入库
    libraryTarget: 'umd' // 可以通过模块化方式引入库
    // `libraryTarget`可选项
    // 'umd' | 'umd2' | 'commonjs2' | 'commonjs' | 'amd' | 'this' | 'var' | 'assign' | 'window' | 'global' | 'jsonp'
  },
  externals: ['lodash'] // 打包时忽略的`lodash`库
};
