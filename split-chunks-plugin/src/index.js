import moment from 'moment';
import $ from 'jquery';
import utils from './utils';

console.log(moment());

console.log($('#root'));

console.log(utils.name);

// 异步加载`lodash`，并创建一个`div`元素
const getComponent = () => {
  // 使用魔法注释，来自定义代码分割后的`chunkName`
  return import(/* webpackChunkName: 'lodash' */ 'lodash').then(
    ({ default: _ }) => {
      console.dir(_);
      const element = document.createElement('div');

      element.innerHTML = _.join(['wang', 'jianwu'], '.');

      return element;
    }
  );
};

getComponent().then(element => {
  document.body.append(element);
});
