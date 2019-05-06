### 打包静态资源（样式）

#### style-loader

将模块的导出作为样式添加到 `DOM` 中

- [style-loader - 印记中文](https://webpack.docschina.org/loaders/style-loader)
- [style-loader#选项 - 印记中文](https://webpack.docschina.org/loaders/style-loader#%E9%80%89%E9%A1%B9)
- [style loader | webpack](https://webpack.js.org/loaders/style-loader/)

#### css-loader

解析 `CSS` 文件后，使用 `import` 加载，并且返回 `CSS` 代码

- [css-loader - 印记中文](https://webpack.docschina.org/loaders/css-loader)
- [css-loader#选项 - 印记中文](https://webpack.docschina.org/loaders/css-loader#%E9%80%89%E9%A1%B9)
- [css loader | webpack](https://webpack.js.org/loaders/css-loader/)

##### 部分重要参数

- `modules`：启用或禁用 `CSS Modules`
- `importLoaders`：在 `css-loader` 前使用的 `loader` 数量

#### less-loader

加载和转译 `LESS` 文件

- [less loader](https://webpack.js.org/loaders/less-loader/)

#### sass-loader

加载和转译 `SASS`/`SCSS` 文件

- [sass loader](https://webpack.js.org/loaders/sass-loader/)

```bash
yarn add sass-loader node-sass -D
```

#### postcss-loader

使用 `PostCSS` 加载和转译 `CSS` 文件

- [postcss loader](https://webpack.js.org/loaders/postcss-loader/)
- [PostCSS](https://postcss.org/)

##### 用法

`postcss.config.js`

```javascript
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    },
    cssnano: {}
  }
};
```

##### 部分常用插件

> 详细介绍可查看：[CSS 工程方案](https://github.com/shuangmianxiaoQ/study-note/issues/38)

- [postcss-import](https://github.com/postcss/postcss-import)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env)
- [stylelint](https://stylelint.io/)
- [cssnano](https://github.com/cssnano/cssnano)
