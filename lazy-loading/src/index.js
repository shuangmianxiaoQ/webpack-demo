const getComponent = async () => {
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

  const element = document.createElement('div');

  element.innerHTML = _.join(['lazy', 'loading'], '-');

  return element;
};

document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.append(element);
  });
});
