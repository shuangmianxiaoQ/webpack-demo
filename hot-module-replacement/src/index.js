// CSS HMR（css-loader 内部实现了 HMR） -> 页面不刷新，只替换样式
/* import './style.css';

const btn = document.createElement('button');
btn.innerHTML = '增加';

document.body.append(btn);

btn.onclick = () => {
  const div = document.createElement('div');
  div.innerHTML = 'item';

  document.body.append(div);
}; */

import counter from './counter';
import number from './number';

counter();
number();

// 手动实现 HMR
if (module.hot) {
  module.hot.accept('./number', () => {
    const element = document.getElementById('number');
    document.body.removeChild(element);

    number();
  });
}
