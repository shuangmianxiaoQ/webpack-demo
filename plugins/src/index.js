import './styles/index.css';

const root = document.getElementById('root');

root.innerHTML = `
  <div class="iconfont icon-comments"></div>
  <div class="iconfont icon-heart"></div>
  <div class="iconfont icon-Aa"></div>
  <div class="iconfont icon-writting"></div>
`;

console.log(
  `编译时定义的全局常量：__DEV__ -> ${__DEV__}，__PROD__ -> ${__PROD__}，__VERSION__ -> ${__VERSION__}`
);
