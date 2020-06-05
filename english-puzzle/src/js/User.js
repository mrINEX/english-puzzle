import createElement from './createElement';
import createPuzzle from './createPuzzle';
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
        // translate(sentenceText).then(([translateText]) => {
        //   sentenceNode.translateText = translateText;
        // });

        sentences.push(sentenceNode);
      }
    });
    console.log('sentences:', sentences);
    this.sentences = sentences; // .sort(() => Math.random() - 0.5);
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
    imageSentencesGame.onload = () => {
      this.puzzle = createPuzzle(this.sentences);
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
  }
}
