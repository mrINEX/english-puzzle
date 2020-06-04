export default async (group, page) => {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  const sentences = [];
  data.sort(() => Math.random() - 0.5);
  console.log(data);
  data.forEach((value) => {
    const newValue = value.textExample.replace(/<b>|<\/b>/g, '');
    const sentence = newValue.split(' ');
    if (sentence.length < 11 && sentences.length < 10) {
      sentences.push(sentence);
    }
  });
  return sentences.sort(() => Math.random() - 0.5);
};
