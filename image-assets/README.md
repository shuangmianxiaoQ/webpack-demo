### 打包静态资源

#### ~~file-loader~~

将文件发送到输出文件夹，并返回（相对）`URL`

- [file-loader - 印记中文](https://webpack.docschina.org/loaders/file-loader)
- [file loader](https://webpack.js.org/loaders/file-loader/)

#### ~~url-loader~~

像 `file loader` 一样工作，但如果文件小于限制，可以返回 `data URL`

[url-loader](https://webpack.js.org/loaders/url-loader/)

### Webpack5 变更

静态资源打包不再使用`loader`，使用内置的 [资源模块类型(asset module type)](https://webpack.docschina.org/guides/asset-modules/) 处理

- `asset/resource`: 发送一个单独的文件并导出 URL，之前通过使用 `file-loader` 实现。
- `asset/inline`: 导出一个资源的 `data URI`，之前通过使用 `url-loader` 实现。
- `asset/source`: 导出资源的源代码，之前通过使用 `raw-loader` 实现。
- `asset`: 在导出一个 `data URI` 和发送一个单独的文件之间自动选择，之前通过使用 `url-loader`，并且配置资源体积限制实现。
