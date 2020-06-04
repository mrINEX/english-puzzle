import createElement from './createElement';

export default () => {
  const wrapperGame = document.querySelector('.wrapper-game').getBoundingClientRect();
  const game = document.querySelector('.wrapper-sentences-game').children;

  const puzzleGame = createElement('div', {
    classList: ['wrapper-game-puzzle'],
  });

  [...game].forEach((sentence, heightIndex) => {
    const sentencePuzzle = createElement('div', {
      classList: ['sentence-game-puzzle', `sentence-${heightIndex}`],
    });
    puzzleGame.append(sentencePuzzle);

    let widthPuzzle = 0;
    let sentenceText = '';
    [...sentence.children].forEach((word, index) => {
      sentenceText += word.textContent;
      const bound = word.getBoundingClientRect();

      let width = Number(bound.width.toFixed(2));
      if (sentence.children.length - 1 > index) {
        width += 10;
      }

      const wordPuzzle = createElement('div', {
        classList: ['word-game-puzzle'],
        innerText: `${word.textContent}`,
        draggable: true,
        'data-key-word': `${word.textContent}`,
        'data-key-sentence': `${heightIndex}`,
      }, {
        width: `${width}px`,
        height: `${bound.height.toFixed(2)}px`,
        background: 'url("./src/assets/evening in Kair.jpg")',
        'background-size': `${wrapperGame.width.toFixed(2)}px`,
        'background-position-x': `-${widthPuzzle}px`,
        'background-position-y': `-${bound.height.toFixed(2) * heightIndex}px`,
      });
      if (index === 0) {
        wordPuzzle.classList.add('first-puzzle');
      }
      if (index > 0 && sentence.children.length - 1 > index) {
        wordPuzzle.classList.add('center-puzzle');
      }
      if (sentence.children.length - 1 === index) {
        wordPuzzle.classList.add('last-puzzle');
      }
      widthPuzzle += Number(bound.width.toFixed(2));
      sentencePuzzle.append(wordPuzzle);
    });
    sentencePuzzle.setAttribute('data-sentenceText', `${sentenceText}`);
  });
  document.querySelector('.main-page').append(puzzleGame);
  return puzzleGame;
};
