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

// 遍历生成一个包含所有模块信息的依赖图
const makeDependenciesGraph = entry => {
  const entryModule = moduleAnalyzer(entry);
  const graphArray = [entryModule];
  const graph = {};

  // 使用`for`循环遍历，因为数组长度在不断增加
  for (let i = 0; i < graphArray.length; i++) {
    const { dependencies } = graphArray[i];
    const dependenciesArray = Object.values(dependencies);

    // 如果该模块依赖其他模块，则分析其依赖模块
    if (dependenciesArray.length > 0) {
      dependenciesArray.forEach(item => graphArray.push(moduleAnalyzer(item)));
    }
  }

  // 将生成的图数组转化为更直观的对象形式
  graphArray.forEach(({ filename, dependencies, code }) => {
    graph[filename] = { dependencies, code };
  });

  return graph;
};

// 生成代码
const generateCode = entry => {
  const graphInfo = JSON.stringify(makeDependenciesGraph(entry));

  return `
    (function(graph) {
      function require(module){
        function localRequire(relativePath) {
          return require(graph[module].dependencies[relativePath]);
        }

        var exports = {};

        (function(require, exports, code) {
          eval(code);
        })(localRequire, exports, graph[module].code)

        return exports;
      }

      require('${entry}');
    })(${graphInfo})
  `;
};

const code = generateCode('./src/index.js');

console.log(code);
