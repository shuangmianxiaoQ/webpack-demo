### 插件

#### HtmlWebpackPlugin

在打包结束后，自动生成一个 `HTML` 文件，并将打包产生的 `js` 和 `css` 自动引入到该 `HTML` 文件中

- [HtmlWebpackPlugin - 印记中文](https://webpack.docschina.org/plugins/html-webpack-plugin/)
- [HtmlWebpackPlugin | webpack](https://webpack.js.org/plugins/html-webpack-plugin/)
- [html-webpack-plugin#options](https://github.com/jantimon/html-webpack-plugin#options)

如果想覆盖模板中的 `title`，可使用模板引擎语法来配置，详情可参考：[html-webpack-plugin#writing-your-own-templates](https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates)

#### ~~CleanWebpackPlugin~~

在打包结束前，清理 `dist` 目录（webpack5 设置 output.clean 为 true 替代该插件）

- [clean-webpack-plugin | github](https://github.com/johnagan/clean-webpack-plugin)

#### webpack.HotModuleReplacementPlugin

启用模块热替换（永远不要在生产环境下启用 `HMR`）

详情及使用可查看后续 `HMR` 相关 `Demo`：[hot-module-replacement](https://github.com/shuangmianxiaoQ/webpack-demo/tree/master/hot-module-replacement)

#### webpack.DefinePlugin

允许创建在编译时可以配置的全局常量

- [DefinePlugin - 印记中文](https://webpack.docschina.org/plugins/define-plugin)
- [define plugin | webpack](https://webpack.js.org/plugins/define-plugin/)

#### MiniCssExtractPlugin

为每个引入 `CSS` 的 `JS` 文件创建一个 `CSS` 文件（用于生产环境）

- [mini css extract plugin | webpack](https://webpack.js.org/plugins/mini-css-extract-plugin/)

#### OptimizeCSSAssetsPlugin

生产环境中对 `css` 代码压缩，注意在 `optimization.minimizer` 中设置该插件，默认使用 `cssnano` 压缩器（`webpack4` 内置了 `cssnano`，所以不再需要安装 `cssnano`）

- [mini-css-extract-plugin/#minimizing-for-production](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production)

#### StyleLintPlugin

在 `webpack` 中使用 `stylelint` 检查的插件

- [stylelint-webpack-plugin | webpack](https://webpack.js.org/plugins/stylelint-webpack-plugin)
- [stylelint-webpack-plugin#options](https://github.com/webpack-contrib/stylelint-webpack-plugin#options)

##### 部分参数介绍

- `context`: 指定需要匹配的文件夹根目录
- `failOnError`: 默认为`false`，设置为`true`时，出现`stylelint`错误时会停止编译
- `files`: 这个要特别说明下，默认只匹配`sass`和`scss`文件（`'**/*.s?(a|c)ss'`），如果使用其他预处理器，一定记得修改这个参数配置
- `syntax`: 默认为`scss`，其他可选语法有 `"css-in-js"|"html"|"less"|"markdown"|"sass"|"scss"|"sugarss"`

#### BundleAnalyzerPlugin

使用交互式可缩放树形图，可视化分析 `webpack` 输出的 `bundle`

- [webpack-bundle-analyzer | github](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [webpack-bundle-analyzer#options-for-plugin](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin)

#### ProgressBarPlugin

打包进度条插件

- [progress-bar-webpack-plugin | github](https://github.com/clessg/progress-bar-webpack-plugin)

#### CopyWebpackPlugin

将单个文件或整个目录复制到构建目录

- [copy webpack plugin | webpack](https://webpack.js.org/plugins/copy-webpack-plugin/)

#### FriendlyErrorsWebpackPlugin

能够更好地在终端看到 `webapck` 运行的警告和错误，提供更好的开发体验

- [friendly-errors-webpack-plugin | github](https://github.com/geowarin/friendly-errors-webpack-plugin)

注意：关闭 `devServer` 的错误日志（[friendly-errors-webpack-plugin#turn-off-errors](https://github.com/geowarin/friendly-errors-webpack-plugin#turn-off-errors)）

#### webpack.BannerPlugin

在每个生成的 `chunk` 顶部添加 `banner` 注释

- [banner-plugin | webpack](https://webpack.js.org/plugins/banner-plugin)

#### webpack.IgnorePlugin

从 `bundle` 中排除某些模块，比如 `moment` 中的 `locale` 文件

- [IgnorePlugin | webpack](https://webpack.js.org/plugins/ignore-plugin)

### webpack.ProvidePlugin

自动加载模块，而不必到处 `import` 或 `require` 的插件，例如全局使用 `jQuery`

- [ProvidePlugin - 印记中文](https://webpack.docschina.org/plugins/provide-plugin/)

#### OfflinePlugin

#### PrerenderSPAPlugin

#### TerserWebpackPlugin

生产环境中使用 `terser` 压缩器来压缩 `JS` 代码（`webpack4` 中使用 `optimization.minimize` 来启用该插件，生产模式下默认启用）

- [terser webpack plugin | webpack](https://webpack.js.org/plugins/terser-webpack-plugin/)
- [terser-webpack-plugin#options](https://github.com/webpack-contrib/terser-webpack-plugin#options)
- [terser#minify-options](https://github.com/terser-js/terser#minify-options)

#### UglifyjsWebpackPlugin

生产环境中使用 `uglify-js` 压缩器来压缩 `JS` 代码（用法和 `TerserWebpackPlugin` 基本相似）

- [uglifyjs webpack plugin | webpack](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)

#### ExtractTextWebpackPlugin

从 `bundle` 中提取文本（`CSS`）到单独的文件（从 `webpack4` 开始，`extract-text-webpack-plugin` 不应该用于 `css`，使用 `mini-css-extract-plugin` 代替）

#### NoEmitOnErrorsPlugin

在输出阶段时，遇到编译错误跳过（`webpack4` 中使用 `optimization.noEmitOnErrors` 来替代）
