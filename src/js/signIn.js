import createElement from './createElement';
import existRemove from './existRemove';

export default (user) => {
  fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((data) => {
    const { ok } = data;
    if (ok) {
      return data.json();
    }
    return data.text();
  })
    .then((data) => {
      existRemove('.message-error-sign-in');
      if (typeof data === 'string') {
        const message = createElement('span', {
          classList: ['message-error-sign-in'],
          innerText: `${data}`,
        }, {
          color: 'darkred',
        });
        document.querySelector('.sign-in').before(message);
      } else {
        localStorage.setItem('token', data.token);
        window.location.reload();
      }
    });
};
