import avatar from './assets/avatar.jpg';
import logo from './assets/logo.svg';

const root = document.getElementById('root');

const img1 = new Image();
const img2 = new Image();

img1.src = avatar;
img2.src = logo;

root.append(img1, img2);
