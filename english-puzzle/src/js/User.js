import createElement from './createElement';
import createPuzzle from './createPuzzle';

export default class User {
  constructor(sentences) {
    this.sentences = sentences;
  }

  doThePuzzle() {
    const wrapperGame = createElement('div', {
      classList: ['wrapper-game'],
    });
    const wrapperSentencesGame = createElement('div', {
      classList: ['wrapper-sentences-game'],
    });
    const imageSentencesGame = createElement('img', {
      classList: ['image-sentences-game'],
      src: './src/assets/evening in Kair.jpg',
    });
    imageSentencesGame.onload = createPuzzle;

    this.sentences.forEach((sentence, index) => {
      const sentenceGame = createElement('div', {
        classList: ['sentence-game', `sentence-${index}`],
      });
      sentence.forEach((word) => {
        const wordGame = createElement('div', {
          classList: ['word-game'],
          innerText: `${word}`,
          draggable: true,
        });
        sentenceGame.append(wordGame);
      });
      wrapperSentencesGame.append(sentenceGame);
    });
    wrapperGame.append(wrapperSentencesGame, imageSentencesGame);
    document.querySelector('.main-page').append(wrapperGame);
  }
}
