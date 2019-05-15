### Babel 处理 ES6 语法

- [使用指南 · Babel 中文网](https://www.babeljs.cn/docs/usage)
- [Usage Guide · Babel](https://babeljs.io/docs/en/usage)

#### babel-loader

#### @babel/core

#### @babel/preset-env

#### @babel/polyfill

- [usage#polyfill · Babel 中文网](https://www.babeljs.cn/docs/usage#polyfill)
- [usage#polyfill](https://babeljs.io/docs/en/usage#polyfill)
- [配置 Babel · Babel 中文网](https://www.babeljs.cn/docs/configuration)
- [Configure Babel · Babel](https://babeljs.io/docs/en/configuration)
- [预设（Presets） · Babel 中文网](https://www.babeljs.cn/docs/presets)
- [Presets · Babel](https://babeljs.io/docs/en/presets)
- [@babel/preset-env - usebuiltins · Babel](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)

> 主要：`@babel/polyfill` 安装在 `dependencies` 而不是 `devDependencies`cc 中，因为它是一个需要在源代码之前运行的 `polyfill`

可以使用 `useBuiltIns` 选项来按需引入 `polyfill` 来优化打包体积过大的问题：

```
presets: [
  [
    '@babel/preset-env',
    {
      corejs: 2, // 注意指定 corejs
      useBuiltIns: 'usage'
    }
  ]
]
```

#### @babel/plugin-transform-runtime

- [@babel/plugin-transform-runtime · Babel](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

对于工具库来说，使用 `@babel/polyfill` 可能太冗余了，一般使用 `@babel/plugin-transform-runtime` 插件，而不是对全局范围造成污染的 `@babel/polyfill`

#### @babel/preset-react
