import { createSignPage, createStartPage } from './js/create';
import getPhrase from './js/api.phrase';

window.onload = () => {
  // signIN({ email: 'o@user.com', password: 'Gfhjkm_123' });
  const token = localStorage.getItem('token');
  if (token) {
    createStartPage();

    const arr = getPhrase(0, 0);
    console.log(arr);
  } else {
    createSignPage('IN');
  }
};
