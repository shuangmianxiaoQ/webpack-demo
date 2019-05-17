### Tree Shaking

- [tree shaking - 印记中文](https://webpack.docschina.org/guides/tree-shaking/)
- [tree shaking | webpack](https://webpack.js.org/guides/tree-shaking/)

`Tree Shaking` 通常用于描述移除 `JavaScript` 上下文中的未引用代码（`dead-code`）

通过设置 `package.json` 中的 `sideEffects` 属性，来标记无副作用文件

开发环境中，需要设置 `optimization` 的 `usedExports` 属性来开启 `Tree Shaking`
