export default () => {
  const element = document.createElement('div');

  element.innerHTML = 'Prefetching/Preloading';

  document.body.append(element);
};
