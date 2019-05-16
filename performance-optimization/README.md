### 性能优化

1. 跟上技术的迭代（Node，Npm，Yarn）

2. 在尽可能少的模块上应用 loader

比如使用`babel-loader`时，通过`include`或`exclude`去限定在哪些模块中使用

3. Plugin 尽可能精简并确保可靠

4. resolve 参数合理配置

5. 使用 DllPlugin 提升打包速度

6. 控制包文件大小

7. 使用`thread-loader`，`parallel-webpack`，`happypack`多进程打包

8. 合理使用`sourceMap`

9. 结合`stats`分析打包结果

10. 开发环境内存编译

11. 开发环境无用插件剔除