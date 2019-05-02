import renderAvatar from './renderAvatar';

import avatar from './assets/avatar.jpg';
import logo from './assets/logo.svg';

import styles from './styles/index.scss';

console.log(styles);

renderAvatar();

const root = document.getElementById('root');

const img1 = new Image();
const img2 = new Image();

img1.src = avatar;
img2.src = logo;

// CSS Modules
img1.classList.add(styles.avatar);
img2.classList.add(styles.logo);

root.append(img1, img2);
