export default () => {
  const btn = document.createElement('button');
  btn.innerHTML = '点击';

  const div = document.createElement('div');
  div.setAttribute('id', 'counter');
  div.innerHTML = '1';

  btn.onclick = () => {
    div.innerHTML = parseInt(div.innerHTML, 10) + 1;
  };

  document.body.append(btn, div);
};
