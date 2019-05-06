### Code Splitting

代码分割，没有`Webpack`也能实现，只是在`Webpack`中比较容易实现

#### 实现方式

1. 同步代码：在`webpack`配置中，设置`optimization`的`splitChunks`
2. 异步代码（动态`import`）：不需要配置，`webpack`会自动进行代码分割
