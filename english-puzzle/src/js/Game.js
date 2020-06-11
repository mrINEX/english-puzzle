import createElement from './createElement';
import existRemove from './existRemove';
import translate from './api.translate';
import createPuzzle from './createPuzzle';
import getLevelImage from '../assets/data_paintings/getLevel';

export default class Game {
  constructor(data) {
    console.log('User data:', data);
    this.data = data;
    this.level = data[0].group;
    this.page = data[0].page;
    this.levelImages = getLevelImage(this.level);
    this.pageImage = this.levelImages[this.page];
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
    console.log('User this full:', this);
    this.sentences = sentences;
  }

  async runGame(sentenceNumber) {
    this.sentenceNumber = sentenceNumber;
    console.log(this);
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
        const wordPuzzle = [...gameRoundWords.children]
          .find((node) => node.getAttribute('data-key-word') === key);
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
          src: `./src/assets/data_paintings/${this.pageImage.imageSrc}`,
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
      existRemove('.results-page');
      document.querySelector('.main-page').classList.add('hidden');

      const resultsPage = createElement('div', {
        classList: ['results-page'],
      });

      const wrapperResults = createElement('div', {
        classList: ['wrapper-results'],
      });

      const wrapperResultsImage = createElement('div', {
        classList: ['wrapper-results-image'],
      });
      const resultImage = createElement('img', {
        classList: ['result-image'],
        src: `./src/assets/data_paintings/${this.pageImage.imageSrc}`,
      }, {
        width: '300px',
      });
      const resultAuthor = createElement('h4', {
        innerText: `${this.pageImage.author}`,
      }, {
        color: 'darkslategray',
      });
      const resultNameImage = createElement('h4', {
        innerText: `${this.pageImage.name}(${this.pageImage.year})`,
      }, {
        color: 'darkslategray',
      });
      wrapperResultsImage.append(resultImage, resultAuthor, resultNameImage);

      const wrapperResultsSentences = createElement('div', {
        classList: ['wrapper-results-sentences'],
      });
      const resultKnow = createElement('div', {
        classList: ['result-know'],
      });
      const resultDontKnow = createElement('div', {
        classList: ['result-dont-know'],
      });
      wrapperResultsSentences.append(resultKnow, resultDontKnow);

      [...assembledGamePuzzle.children].forEach((sentence, index) => {
        const wrapperResult = createElement('div', {
          classList: ['wrapper-result'],
          'data-result-number-sentence': index,
        });
        const resultAudio = createElement('div', {
          classList: ['result-audio'],
        });
        resultAudio.onclick = () => {
          this.sentences[index].audio.play();
        };
        const resultSentence = createElement('div', {
          classList: ['result-sentence'],
          innerText: `${this.sentences[index].sentenceText}`,
        });
        wrapperResult.append(resultAudio, resultSentence);

        const isCorrect = sentence.getAttribute('data-is-correct');
        if (isCorrect === 'true') {
          resultKnow.append(wrapperResult);
        } else {
          resultDontKnow.append(wrapperResult);
        }
      });
      const titleKnow = createElement('h2', {
        innerText: `I know ${resultKnow.children.length}`,
      }, {
        color: 'white',
        background: '#98d33c',
        borderRadius: '6px',
        marginBottom: '5px',
      });
      resultKnow.prepend(titleKnow);

      const titleDontKnow = createElement('h2', {
        innerText: `I don't know ${resultDontKnow.children.length}`,
      }, {
        color: 'white',
        background: '#bd3737',
        borderRadius: '6px',
        marginBottom: '5px',
      });
      resultDontKnow.prepend(titleDontKnow);

      wrapperResults.append(wrapperResultsImage, wrapperResultsSentences);
      resultsPage.append(wrapperResults);
      document.querySelector('body').append(resultsPage);
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

    const prompImgCardBotton = document.querySelector('.image-card-prompt');
    shuffle.forEach((puzzle) => {
      if (prompImgCardBotton.classList.contains('disabled')) {
        const currentStyle = puzzle.getAttribute('style');
        puzzle.setAttribute('style', `${currentStyle}background: darkslategray;`);
      }
      gameRoundWords.append(puzzle);
    });

    game.after(wrapperGameRound);
  }

  prepareForMakePuzzle() {
    existRemove('.wrapper-game');

    const wrapperGame = createElement('div', { classList: ['wrapper-game'] });
    const wrapperSentencesGame = createElement('div', {
      classList: ['wrapper-sentences-game'],
    });
    const imageSentencesGame = createElement('img', {
      classList: ['image-sentences-game'],
      src: `./src/assets/data_paintings/${this.pageImage.imageSrc}`,
    });
    imageSentencesGame.onload = () => {
      this.puzzle = createPuzzle(this);
      this.runGame(0);
    };

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
    // return imageSentencesGame;
  }
}
