const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

const moduleAnalyzer = filename => {
  // 读取入口文件的内容
  const content = fs.readFileSync(filename, 'utf-8');

  // 将文件内容解析为`AST`抽象语法树
  const ast = parser.parse(content, { sourceType: 'module' });

  // 分析出代码中的模块依赖
  const dependencies = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename); // './src'
      const filepath = path.join(dirname, node.source.value); // 'src/message.js'
      dependencies[node.source.value] = filepath; // { './message.js': 'src/message.js' }
    }
  });

  // 将`AST`抽象语法树转换为能够在浏览器上运行的代码
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  });

  return { filename, dependencies, code };
};

const moduleInfo = moduleAnalyzer('./src/index.js');

console.log(moduleInfo);
