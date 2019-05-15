### 性能优化

1. 跟上技术的迭代（Node，Npm，Yarn）

2. 在尽可能少的模块上应用 loader

比如使用`babel-loader`时，通过`include`或`exclude`去限定在哪些模块中使用

3. Plugin 尽可能精简并确保可靠

4. resolve 参数合理配置
