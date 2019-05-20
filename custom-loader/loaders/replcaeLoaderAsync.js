const loaderUtils = require('loader-utils');

// 不能使用箭头函数，因为会用到函数中的`this`
module.exports = function(source) {
  const options = loaderUtils.getOptions(this); // 获取`Loader`传来的参数
  const result = source.replace('world', options.name);
  const callback = this.async(); // 异步`Loader`

  // return source.replace('world', this.query.name);
  // return source.replace('world', options.name);
  // return this.callback(null, result);

  setTimeout(() => callback(null, result), 3000);
};
