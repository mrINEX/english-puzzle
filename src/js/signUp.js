import createElement from './createElement';
import existRemove from './existRemove';

export default (user) => {
  fetch('https://afternoon-falls-25894.herokuapp.com/users', {
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
      existRemove('.message-error-sign-up');
      const message = createElement('span', {
        classList: ['message-error-sign-up'],
      }, {
        color: 'darkred',
      });
      document.querySelector('.sign-up').before(message);

      if (typeof data === 'string') {
        message.innerText = `${data}`;
      } else {
        console.log('new user:', data);
        message.innerText = 'User was created.';
      }
    });
};
