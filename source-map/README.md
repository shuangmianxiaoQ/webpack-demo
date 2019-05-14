### Source Map

- [devtool - 印记中文](https://webpack.docschina.org/configuration/devtool)
- [devtool | webpack](https://webpack.js.org/configuration/devtool/)
- [devtool#对于开发环境](https://webpack.docschina.org/configuration/devtool#%E5%AF%B9%E4%BA%8E%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
- [devtool#对于生产环境](https://webpack.docschina.org/configuration/devtool#%E5%AF%B9%E4%BA%8E%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83)

#### devtool 选项参数介绍

| devtool                        | build | rebuild | production | quality                       |
| :----------------------------- | :---: | :-----: | :--------: | ----------------------------- |
| (none)                         |  +++  |   +++   |    yes     | bundled code                  |
| eval                           |  +++  |   +++   |     no     | generated code                |
| cheap-eval-source-map          |   +   |   ++    |     no     | transformed code (lines only) |
| cheap-module-eval-source-map   |   o   |   ++    |     no     | original source (lines only)  |
| eval-source-map                |  --   |    +    |     no     | original source               |
| cheap-source-map               |   +   |    o    |    yes     | transformed code (lines only) |
| cheap-module-source-map        |   o   |    -    |    yes     | original source (lines only)  |
| inline-cheap-source-map        |   +   |    o    |     no     | transformed code (lines only) |
| inline-cheap-module-source-map |   o   |    -    |     no     | original source (lines only)  |
| source-map                     |  --   |   --    |    yes     | original source               |
| inline-source-map              |  --   |   --    |     no     | original source               |
| hidden-source-map              |  --   |   --    |    yes     | original source               |
| nosources-source-map           |  --   |   --    |    yes     | without source content        |

> `+++` super fast, `++` fast, `+` pretty fast, `o` medium, `-` pretty slow, `--` slow

#### 开发环境推荐

- `eval`
- `eval-source-map`
- `cheap-eval-source-map`
- `cheap-module-eval-source-map`

#### 生产环境推荐

- `(none)`
- `source-map`
- `hidden-source-map`
- `nosources-source-map`
