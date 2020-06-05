import createElement from './createElement';
import existRemove from './existRemove';
import registration from './registration';
import signIN from './signIn';
import signUP from './signUp';

function createSignPage(mode) {
  existRemove('.sign-page');
  existRemove('.start-page');
  existRemove('.main-page');
  if (mode === 'UP') {
    const signPage = createElement('div', {
      classList: ['sign-page'],
      innerHTML: '<h1 class="sign-page__title">Sign up</h1>',
    });
    const signUpForm = createElement('form', {
      classList: ['sign-up-form'],
      name: 'signUp',
    });
    const wrapperEmail = createElement('div', { classList: ['wrapper-email'] });
    const labelEmail = createElement('label', {
      for: 'email',
      innerText: 'Email: ',
    });
    const inputEmail = createElement('input', {
      classList: ['sign-up-email'],
      type: 'email',
      name: 'email',
      required: 'required',
    });
    wrapperEmail.append(labelEmail, inputEmail);

    const wrapperPassword = createElement('div', { classList: ['wrapper-password'] });
    const labelPassword = createElement('label', {
      for: 'password',
      innerText: 'Password: ',
    });
    const inputPassword = createElement('input', {
      classList: ['sign-up-password'],
      type: 'password',
      name: 'password',
      pattern: '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W|_])[a-zA-Z0-9_\\W]{8,}$',
      required: 'required',
    });
    wrapperPassword.append(labelPassword, inputPassword);
    const inputSubmit = createElement('input', {
      classList: ['sign-up', 'btn'],
      type: 'submit',
      value: 'sign up',
    });
    inputSubmit.onclick = (e) => {
      const { signUp } = document.forms;
      const emailValue = signUp.elements.email.value;
      const passwordValue = signUp.elements.password.value;
      if (emailValue && passwordValue) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_])[a-zA-Z0-9_\W]{8,}$/.test(passwordValue)) {
          e.preventDefault();
          signUP({ email: emailValue, password: passwordValue });
        }
      }
    };
    signUpForm.append(wrapperEmail, wrapperPassword, inputSubmit);

    signPage.append(signUpForm);
    document.querySelector('body').append(signPage);
  }
  if (mode === 'IN') {
    const signPage = createElement('div', {
      classList: ['sign-page'],
      innerHTML: '<h1 class="sign-page__title">Sign in</h1>',
    });
    const signUpForm = createElement('form', {
      classList: ['sign-in-form'],
      name: 'signIn',
    });
    const wrapperEmail = createElement('div', { classList: ['wrapper-email'] });
    const labelEmail = createElement('label', {
      for: 'email',
      innerText: 'Email: ',
    });
    const inputEmail = createElement('input', {
      classList: ['sign-in-email'],
      type: 'email',
      name: 'email',
      required: 'required',
    });
    wrapperEmail.append(labelEmail, inputEmail);

    const wrapperPassword = createElement('div', { classList: ['wrapper-password'] });
    const labelPassword = createElement('label', {
      for: 'password',
      innerText: 'Password: ',
    });
    const inputPassword = createElement('input', {
      classList: ['sign-in-password'],
      type: 'password',
      name: 'password',
      required: 'required',
    });
    wrapperPassword.append(labelPassword, inputPassword);
    const inputSubmit = createElement('input', {
      classList: ['sign-in', 'btn'],
      type: 'submit',
      value: 'sign in',
    });
    inputSubmit.onclick = (e) => {
      const { signIn } = document.forms;
      const emailValue = signIn.elements.email.value;
      const passwordValue = signIn.elements.password.value;
      if (emailValue && passwordValue) {
        e.preventDefault();
        signIN({ email: emailValue, password: passwordValue });
      }
    };
    signUpForm.append(wrapperEmail, wrapperPassword, inputSubmit);

    signPage.append(signUpForm);
    document.querySelector('body').append(signPage);
  }
}

function createMainPage() {
  const mainPage = createElement('div', {
    classList: ['main-page'],
  });

  const mainPageNav = createElement('nav', {
    classList: ['main-page-nav'],
  });

  const wrapperLevel = createElement('div', {
    classList: ['wrapper-level'],
  });
  const labelLevel = createElement('label', {
    for: 'level',
    innerText: 'Level: ',
  });
  const selectLevel = createElement('select', {
    classList: ['select-level'],
    name: 'level',
    innerHTML: `
      <option value="0">1</option>
      <option value="1">2</option>
      <option value="2">3</option>
      <option value="3">4</option>
      <option value="4">5</option>
      <option value="5">6</option>
    `,
  });
  wrapperLevel.append(labelLevel, selectLevel);

  const wrapperLevelPage = createElement('div', {
    classList: ['wrapper-level-page'],
  });
  const labelLevelPage = createElement('label', {
    for: 'level-page',
    innerText: 'level page: ',
  });
  const selectLevelPage = createElement('select', {
    classList: ['select-level-page'],
    name: 'level-page',
  });
  for (let i = 0; i < 30; i += 1) {
    const option = createElement('option', {
      value: `${i}`,
      innerText: `${i + 1}`,
    });
    selectLevelPage.append(option);
  }
  wrapperLevelPage.append(labelLevelPage, selectLevelPage);

  const wrapperPrompt = createElement('div', {
    classList: ['wrapper-prompt'],
  });

  const audioPrompt = createElement('div', {
    classList: ['audio-prompt', 'prompt'],
    title: 'on / off audio prompt',
  });
  const translatePrompt = createElement('div', {
    classList: ['translate-prompt', 'prompt'],
    title: 'on / off translate prompt',
  });
  const volumePrompt = createElement('div', {
    classList: ['volume-prompt', 'prompt'],
    title: 'on / off volume prompt',
  });
  const imagePrompt = createElement('div', {
    classList: ['image-prompt', 'prompt'],
    title: 'on / off image prompt',
  });
  wrapperPrompt.append(audioPrompt, translatePrompt, volumePrompt, imagePrompt);

  mainPageNav.append(wrapperLevel, wrapperLevelPage, wrapperPrompt);
  mainPage.append(mainPageNav);
  document.querySelector('body').append(mainPage);
  return { level: selectLevel, page: selectLevelPage };
}

function createStartPage() {
  existRemove('.sign-page');
  existRemove('.start-page');
  registration('logged');

  const startPage = createElement('div', {
    classList: ['start-page'],
  });

  const startPageTitle = createElement('h1', {
    classList: ['start-page__title'],
    innerText: 'ENGLISH PUZZLE',
  });
  const startPageText = createElement('p', {
    classList: ['start-page__text'],
    innerHTML: `Click on words, collect phrases.<br>
  Words can be drag and drop. Select tooltips in the menu.`,
  });
  const startPageButton = createElement('button', {
    classList: ['start-page__button', 'btn'],
    innerText: 'Start',
  });
  startPageButton.onclick = () => {
    // existRemove('.start-page');
    startPage.remove();
  };
  startPage.append(startPageTitle, startPageText, startPageButton);
  document.querySelector('body').append(startPage);
}

const header = createElement('header', {
  classList: ['header'],
});

const logout = createElement('button', {
  classList: ['logout', 'event-none', 'btn-small'],
  innerText: 'Logout',
});
logout.onclick = () => {
  localStorage.removeItem('token');
  registration('not logged');
  createSignPage('IN');
};

const pageSignIn = createElement('button', {
  classList: ['page-sign-in', 'btn-small'],
  innerText: 'sign in',
});
pageSignIn.onclick = () => {
  createSignPage('IN');
};

const pageSignUp = createElement('button', {
  classList: ['page-sign-up', 'btn-small'],
  innerText: 'sign up',
});
pageSignUp.onclick = () => {
  createSignPage('UP');
};

header.append(logout, pageSignIn, pageSignUp);
document.querySelector('body').append(header);

// const wrapperAutoPronunciation = createElement('div', {
//   classList: ['wrapper-auto-pronunciation'],
// });
// const pronunciationAudio = createElement('div', {
//   classList: ['pronunciation-audio'],
//   title: 'pronunciation audio',
// });
// wrapperAutoPronunciation.append(pronunciationAudio);

export {
  createSignPage,
  createStartPage,
  createMainPage,
};
