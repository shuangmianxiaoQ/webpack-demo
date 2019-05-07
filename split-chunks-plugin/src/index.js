import _ from 'lodash';

console.log(_.join(['a', 'b', 'c'], '***'));
console.log(_.chunk([1, 2, 3, 4, 5], 3));

// 异步加载`lodash`，并创建一个`div`元素
// const getComponent = () => {
//   // 使用魔法注释，来自定义代码分割后的`chunkName`
//   return import(/* webpackChunkName: 'lodash' */ 'loadsh').then(
//     ({ default: _ }) => {
//       const element = document.createElement('div');

//       element.innerHTML = _.join(['wang', 'jianwu'], '.');

//       return element;
//     }
//   );
// };

// getComponent().then(element => {
//   document.body.append(element);
// });
