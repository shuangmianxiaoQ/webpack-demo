export default () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'number');
  // div.innerHTML = '2000';
  div.innerHTML = '3000';

  document.body.append(div);
};
