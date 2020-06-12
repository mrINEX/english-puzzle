import createElement from './createElement';

export default (results) => {
  const pageStatistics = createElement('div', {
    classList: ['page-statistics'],
  });
  const wrapperStatistics = createElement('div', {
    classList: ['wrapper-statistics'],
  });

  const returnFromStatistics = createElement('botton', {
    classList: ['btn', 'game-round-btn'],
    innerText: 'return',
  });
  returnFromStatistics.onclick = () => {
    pageStatistics.remove();
    document.querySelector('.results-page').classList.remove('hidden');
  };

  results.forEach((game) => {
    const div = createElement('div', {
      innerHTML: `${game}`,
    });
    wrapperStatistics.append(div);
  });
  pageStatistics.append(wrapperStatistics, returnFromStatistics);
  document.querySelector('body').append(pageStatistics);
};
