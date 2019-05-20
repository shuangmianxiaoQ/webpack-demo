class CopyrightWebpackPlugin {
  apply(compiler) {
    // `compile`钩子：同步钩子，时机是一个新的编译`compilation`创建之后
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', compilation => {
      console.log('compile hook');
    });

    // `emit`钩子：异步钩子，时机是生成资源到`output`目录之前
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, callback) => {
        // 借助`npm scripts`，开启`Node`调试工具
        // 打开`Chrome`浏览器，输入`chrome://inspect`，进行调试
        debugger;
        // console.log(compilation.assets);

        // 添加一个`copyright.txt`的文件
        compilation.assets['copyright.txt'] = {
          source: () => 'Copyright By ShuangmianxiaoQ',
          size: () => 28
        };

        callback(); // 异步钩子，执行一次`callback`
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
