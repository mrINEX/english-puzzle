import createElement from './createElement';
import existRemove from './existRemove';
import translate from './api.translate';

export default class User {
  constructor(data) {
    console.log('data:', data);
    this.data = data;
    const sentences = [];
    data.sort(() => Math.random() - 0.5);
    data.forEach((value) => {
      const sentenceNode = {};
      const sentenceText = value.textExample.replace(/<b>|<\/b>/g, '');
      const sentence = sentenceText.split(' ');
      if (sentence.length < 11 && sentences.length < 10) {
        const path = `./src/assets/${value.audioExample.replace('files', 'data')}`;

        sentenceNode.sentenceText = sentenceText;
        sentenceNode.words = sentence;
        sentenceNode.path = path;
        sentenceNode.audio = new Audio(path);
        sentenceNode.sentenceAudio = value.audioExample;
        sentences.push(sentenceNode);
      }
    });
    console.log('sentences:', sentences);
    this.sentences = sentences; // .sort(() => Math.random() - 0.5);
  }

  async runGame(sentenceNumber) {
    this.sentenceNumber = sentenceNumber;
    console.log(this, sentenceNumber);
    const game = document.querySelector('.wrapper-game');
    const nav = document.querySelector('.main-page-nav');
    const assembledGamePuzzle = document.querySelector('.wrapper-assembled-game-puzzle');
    const text = await translate(this.sentences[sentenceNumber].sentenceText);

    existRemove('.wrapper-auto-pronunciation');
    existRemove('.wrapper-game-round');
    [...assembledGamePuzzle.children].forEach((sentence) => {
      sentence.classList.remove('opacity-full', 'event-none-opacity-full');
    });

    const wrapperAutoPronunciation = createElement('div', {
      classList: ['wrapper-auto-pronunciation'],
    });
    const pronunciationAudio = createElement('div', {
      classList: ['pronunciation-audio', 'prompt'],
      title: 'pronunciation audio',
    });
    pronunciationAudio.onclick = () => {
      this.sentences[sentenceNumber].audio.play();
    };
    const pronunciationText = createElement('div', {
      classList: ['pronunciation-text'],
      title: 'pronunciation text',
      innerText: `${text}`,
    });
    wrapperAutoPronunciation.append(pronunciationAudio, pronunciationText);
    nav.after(wrapperAutoPronunciation);

    const wrapperGameRound = createElement('div', {
      classList: ['wrapper-game-round'],
    });
    const gameRoundWords = createElement('div', {
      classList: ['game-round-words'],
    });
    const gameRoundControls = createElement('div', {
      classList: ['game-round-controls'],
    });

    const dontKnowBotton = createElement('botton', {
      classList: ['btn', 'game-round-btn', 'dont-know-botton'],
      innerText: 'I don\'t know',
    });
    const checkBotton = createElement('botton', {
      classList: ['btn', 'game-round-btn', 'check-botton', 'hidden'],
      innerText: 'Check',
    });
    const continueBotton = createElement('botton', {
      classList: ['btn', 'game-round-btn', 'continue-botton', 'hidden'],
      innerText: 'Continue',
    });
    const resultsBotton = createElement('botton', {
      classList: ['btn', 'game-round-btn', 'results-botton', 'hidden'],
      innerText: 'Results',
    });

    dontKnowBotton.onclick = () => {
      this.sentences[sentenceNumber].audio.play();
      const currentSentence = assembledGamePuzzle.children[sentenceNumber];
      currentSentence.setAttribute('data-is-correct', false);
      currentSentence.classList.remove('opacity-full');
      currentSentence.classList.add('event-none-opacity-full');
      [...currentSentence.children].forEach((nest) => {
        if (nest.children.length) {
          gameRoundWords.append(nest.children[0]);
        }
      });
      [...currentSentence.children].forEach((nest) => {
        const key = nest.getAttribute('data-key-word');
        const wordPuzzle = [...gameRoundWords.children].find((node) => {
          return node.getAttribute('data-key-word') === key;
        });
        wordPuzzle.classList.add('absolute');
        wordPuzzle.style.left = '0px';
        wordPuzzle.style.top = '0px';
        nest.append(wordPuzzle);
      });
      checkBotton.classList.add('hidden');
      dontKnowBotton.classList.add('hidden');
      continueBotton.classList.remove('hidden');

      if (this.sentenceNumber === 9) {
        resultsBotton.classList.remove('hidden');
        const wrapperGame = document.querySelector('.wrapper-game');
        const imageSentencesGame = createElement('img', {
          classList: ['image-sentences-game'],
          src: './src/assets/evening in Kair.jpg',
        }, {
          zIndex: 50,
          position: 'absolute',
        });
        wrapperGame.append(imageSentencesGame);
      }
    };
    checkBotton.onclick = () => {
      let countCorrectSentence = 0;
      const currentSentence = assembledGamePuzzle.children[sentenceNumber];
      const lengthSentence = currentSentence.children.length;
      [...currentSentence.children].forEach((puzzle) => {
        const keyNest = puzzle.getAttribute('data-key-word');
        const keyPuzzle = puzzle.children[0].getAttribute('data-key-word');
        puzzle.children[0].classList.remove('correct-word', 'incorrect-word');
        if (keyNest === keyPuzzle) {
          countCorrectSentence += 1;
          puzzle.children[0].classList.add('correct-word');
        } else {
          puzzle.children[0].classList.add('incorrect-word');
        }
      });
      const isCorrectSentence = countCorrectSentence === lengthSentence;
      currentSentence.setAttribute('data-is-correct', `${isCorrectSentence}`);
      if (isCorrectSentence) {
        this.sentences[sentenceNumber].audio.play();
        checkBotton.classList.add('hidden');
        continueBotton.classList.remove('hidden');
      } else {
        dontKnowBotton.classList.remove('hidden');
      }
    };
    continueBotton.onclick = () => {
      if (this.sentenceNumber < 9) {
        this.runGame(this.sentenceNumber + 1);
      }
    };
    resultsBotton.onclick = () => {
      console.log(assembledGamePuzzle);
    };

    gameRoundControls.append(dontKnowBotton, checkBotton, continueBotton, resultsBotton);
    wrapperGameRound.append(gameRoundWords, gameRoundControls);

    assembledGamePuzzle.children[sentenceNumber].classList.add('opacity-full');
    const bounding = assembledGamePuzzle.children[sentenceNumber].getBoundingClientRect();
    if (sentenceNumber === 0) {
      this.gameY = bounding.bottom - 35;
    } else {
      this.gameY += bounding.height;
    }
    wrapperGameRound.setAttribute('style', `top: ${this.gameY}px`);

    const shuffle = [...this.puzzle.children[sentenceNumber].children]
      .sort(() => Math.random() - 0.5);
    gameRoundWords.append(...shuffle);
    game.after(wrapperGameRound);
  }

  prepareForMakePuzzle() {
    const wrapperGame = createElement('div', { classList: ['wrapper-game'] });
    const wrapperSentencesGame = createElement('div', {
      classList: ['wrapper-sentences-game'],
    });
    const imageSentencesGame = createElement('img', {
      classList: ['image-sentences-game'],
      src: './src/assets/evening in Kair.jpg',
    });

    this.sentences.forEach((sentenceNode, index) => {
      const sentenceGame = createElement('div', {
        classList: ['sentence-game', `sentence-${index}`],
      });
      sentenceNode.words.forEach((word) => {
        const wordGame = createElement('div', {
          classList: ['word-game'],
          innerText: `${word}`,
          'data-key-word': `${word}`,
          'data-key-sentence': `${index}`,
        });
        sentenceGame.append(wordGame);
      });
      wrapperSentencesGame.append(sentenceGame);
    });
    wrapperGame.append(wrapperSentencesGame, imageSentencesGame);
    document.querySelector('.main-page').append(wrapperGame);
    return imageSentencesGame;
  }
}
