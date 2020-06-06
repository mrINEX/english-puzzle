import { createSignPage, createStartPage, createMainPage } from './js/create';
import createPuzzle from './js/createPuzzle';
import getPhrase from './js/api.phrase';
import User from './js/User';

window.onload = () => {
  // signIN({ email: 'o@user.com', password: 'Gfhjkm_123' });
  const token = localStorage.getItem('token');
  if (token) {
    createStartPage();
    const { level, page } = createMainPage();
    let current;
    getPhrase(level.value, 29)
      .then((nodes) => {
        current = new User(nodes);
        const image = current.prepareForMakePuzzle();
        image.onload = () => {
          current.puzzle = createPuzzle(current.sentences);
          current.runGame();
        };
      });

    level.addEventListener('change', () => {
      getPhrase(level.value, page.value)
        .then((nodes) => {
          current = new User(nodes);
        });
    });

    page.addEventListener('change', () => {
      getPhrase(level.value, page.value)
        .then((nodes) => {
          current = new User(nodes);
        });
    });
  } else {
    createSignPage('IN');
  }
};
