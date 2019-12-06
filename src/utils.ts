export const shuffle = <T>(array: T[]): T[] => {
  const shuffledArray = array.slice();
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    const tmp = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = tmp;
  }

  return shuffledArray;
};
