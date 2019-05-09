document.addEventListener('click', () => {
  // 当主页面加载完成，浏览器在空闲时间预获取`click.js`文件
  import(/* webpackPrefetch: true */'./click').then(({ default: getComponent }) => {
    getComponent();
  });
});
