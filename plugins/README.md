### 插件

#### HtmlWebpackPlugin

在打包结束后，自动生成一个`HTML`文件，并将打包产生的`js`和`css`自动引入到该`HTML`文件中

- [HtmlWebpackPlugin - 印记中文](https://webpack.docschina.org/plugins/html-webpack-plugin/)
- [HtmlWebpackPlugin | webpack](https://webpack.js.org/plugins/html-webpack-plugin/)
- [html-webpack-plugin#options](https://github.com/jantimon/html-webpack-plugin#options)

如果想覆盖模板中的`title`，可使用模板引擎语法来配置，详情可参考：[html-webpack-plugin#writing-your-own-templates](https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates)

#### CleanWebpackPlugin

在打包结束前，清理`dist`目录

- [clean-webpack-plugin | github](https://github.com/johnagan/clean-webpack-plugin)

#### webpack.HotModuleReplacementPlugin

#### webpack.DefinePlugin

#### MiniCssExtractPlugin

#### ExtractTextWebpackPlugin

- [ExtractTextWebpackPlugin - 印记中文](https://webpack.docschina.org/plugins/extract-text-webpack-plugin)
- [extract text webpack plugin | webpack](https://webpack.js.org/plugins/extract-text-webpack-plugin/)

#### BundleAnalyzerPlugin

#### UglifyjsWebpackPlugin

#### StyleLintPlugin

#### ProgressBarPlugin

#### NpmInstallWebpackPlugin

#### CopyWebpackPlugin

将单个文件或整个目录复制到构建目录

- [copy webpack plugin | webpack](https://webpack.js.org/plugins/copy-webpack-plugin/)

#### FriendlyErrorsWebpackPlugin

#### TerserWebpackPlugin

#### webpack.BannerPlugin

允许在编译时配置的全局常量

- [DefinePlugin - 印记中文](https://webpack.docschina.org/plugins/define-plugin)
- [define plugin | webpack](https://webpack.js.org/plugins/define-plugin/)

#### webpack.DllPlugin

#### webpack.IgnorePlugin

#### OfflinePlugin

#### PrerenderSPAPlugin

#### OptimizeCSSAssetsPlugin

`css` 压缩，主要使用 `cssnano` 压缩器（`webpack4` 的执行环境内置了 `cssnano`，所以不再需要使用）

#### NoEmitOnErrorsPlugin

在输出阶段时，遇到编译错误跳过（`webpack4` 中使用 `optimization.noEmitOnErrors` 来替代）
