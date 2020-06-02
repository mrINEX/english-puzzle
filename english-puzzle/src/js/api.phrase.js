export default async (group, page) => {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  const sentences = [];
  data.forEach((value, index) => {
    const sentence = value.textExample.split(' ');
    if (sentence.length < 11) {
      if (index < 11) {
        sentences.push(sentence);
      }
    }
  });
  return sentences;
};
