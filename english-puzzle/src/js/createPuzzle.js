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
    [...sentence.children].forEach((word) => {
      const bound = word.getBoundingClientRect();

      const wordPuzzle = createElement('div', {
        classList: ['word-game-puzzle'],
        innerText: `${word.textContent}`,
      }, {
        width: `${bound.width.toFixed(2)}px`,
        height: `${bound.height.toFixed(2)}px`,
        background: 'url("./src/assets/evening in Kair.jpg")',
        'background-size': `${wrapperGame.width.toFixed(2)}px`,
        'background-position-x': `-${widthPuzzle}px`,
        'background-position-y': `-${bound.height.toFixed(2) * heightIndex}px`,
      });
      widthPuzzle += Number(bound.width.toFixed(2));
      sentencePuzzle.append(wordPuzzle);
    });
  });
  document.querySelector('.main-page').append(puzzleGame);
  return puzzleGame;
};
