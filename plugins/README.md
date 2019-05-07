### 插件

#### HtmlWebpackPlugin

在打包结束后，自动生成一个`HTML`文件，并把打包生成的`js`自动引入到该文件中

#### CleanWebpackPlugin

在打包结束前，清理`dist`目录

#### webpack.BannerPlugin

#### webpack.DefinePlugin

允许在编译时配置的全局常量

- [DefinePlugin - 印记中文](https://webpack.docschina.org/plugins/define-plugin)
- [define plugin | webpack](https://webpack.js.org/plugins/define-plugin/)

#### CopyWebpackPlugin

将单个文件或整个目录复制到构建目录

- [copy webpack plugin | webpack](https://webpack.js.org/plugins/copy-webpack-plugin/)

#### ExtractTextWebpackPlugin

- [ExtractTextWebpackPlugin - 印记中文](https://webpack.docschina.org/plugins/extract-text-webpack-plugin)
- [extract text webpack plugin | webpack](https://webpack.js.org/plugins/extract-text-webpack-plugin/)

#### webpack.DllPlugin

#### webpack.HotModuleReplacementPlugin

#### webpack.IgnorePlugin

#### MiniCssExtractPlugin

#### NoEmitOnErrorsPlugin

在输出阶段时，遇到编译错误跳过

#### NpmInstallWebpackPlugin

#### UglifyjsWebpackPlugin

#### TerserWebpackPlugin

#### OptimizeCSSAssetsPlugin

css 压缩，主要使用 cssnano 压缩器(webpack4 的执行环境内置了 cssnano，所以不用安装)

#### BundleAnalyzerPlugin

#### OfflinePlugin

#### PrerenderSPAPlugin

#### ProgressBarPlugin

#### FriendlyErrorsWebpackPlugin
