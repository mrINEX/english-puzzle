export default (storage) => {
  const games = window.localStorage.getItem('english-puzzle-statistics');
  if (games) {
    const arr = JSON.parse(games);
    arr.push(storage);
    window.localStorage.setItem('english-puzzle-statistics', JSON.stringify(arr));
  } else {
    window.localStorage.setItem('english-puzzle-statistics', JSON.stringify([storage]));
  }
};
