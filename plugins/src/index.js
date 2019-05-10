import moment from 'moment';
// import { chunk } from 'loadsh';
import chunk from 'loadsh/chunk';
import './styles/index.css';

// console.log(_map([1, 2, 3]));

$('#root').html(`
  <div class="iconfont icon-comments"></div>
  <div class="iconfont icon-heart"></div>
  <div class="iconfont icon-Aa"></div>
  <div class="iconfont icon-writting"></div>
`);

// 测试 webpack.DefinePlugin 定义的全局变量
console.log(
  `编译时定义的全局常量：__DEV__ -> ${__DEV__}，__PROD__ -> ${__PROD__}，__VERSION__ -> ${__VERSION__}`
);

moment.locale('zh-cn');
console.log(moment());

// 检验未按需引入 `lodash` 方法时，打包文件大小对比
console.log(chunk(['a', 'b', 'c', 'd'], 3));
