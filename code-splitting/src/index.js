import _ from 'lodash';

console.log(_.join(['a', 'b', 'c'], '***'));
console.log(_.chunk([1, 2, 3, 4, 5], 3));

// 异步加载`lodash`，并创建一个`div`元素
const getComponent = () => {
  return import('loadsh').then(({ default: _ }) => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['wang', 'jianwu'], '.');

    return element;
  });
};

getComponent().then(element => {
  document.body.append(element);
});
