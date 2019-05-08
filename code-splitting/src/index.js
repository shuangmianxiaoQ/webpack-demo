import moment from 'moment';

console.log(moment());

// 异步加载`lodash`，并创建一个`div`元素
const getComponent = () => {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['wang', 'jianwu'], '.');

    return element;
  });
};

getComponent().then(element => {
  document.body.append(element);
});
