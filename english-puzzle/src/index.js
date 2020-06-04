import { createSignPage, createStartPage, createMainPage } from './js/create';
import getPhrase from './js/api.phrase';
import User from './js/User';

window.onload = () => {
  // signIN({ email: 'o@user.com', password: 'Gfhjkm_123' });
  const token = localStorage.getItem('token');
  if (token) {
    createStartPage();
    const { level, page } = createMainPage();
    let user;
    getPhrase(level.value, 10)
      .then((sentences) => {
        user = new User(sentences);
        user.prepareForMakePuzzle();
      });

    level.addEventListener('change', () => {
      getPhrase(level.value, page.value)
        .then((sentences) => { user = new User(sentences); console.log(user); });
    });

    page.addEventListener('change', () => {
      getPhrase(level.value, page.value)
        .then((sentences) => { user = new User(sentences); console.log(user); });
    });
  } else {
    createSignPage('IN');
  }
};
