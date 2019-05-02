import avatar from './assets/avatar.jpg';

import styles from './styles/index.scss';

export default () => {
  const root = document.getElementById('root');
  const img = new Image();

  img.src = avatar;
  img.classList.add(styles['avatar']);

  root.append(img);
};
