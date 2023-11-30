export const transpose = (input: string[]): string[] => {
  if (input.length === 0) return [];

  let counter = 0;
  const result: string[] = [];
  const itemsSplited: string[][] = input.map((item) => item.split(''));
  const bigItemFromArray: number = input
    .map((item) => item.length)
    .reduce((prev, curr) => Math.max(prev, curr));

  while (counter < bigItemFromArray) {
    const transposeList: string[] = itemsSplited.map((item) => item[counter] || ' ');
    const newItem: string = (counter + 1 === bigItemFromArray)
      ? transposeList.join('').trimEnd()
      : transposeList.join('');

    result.push(newItem);
    counter++;
  }

  return result;
};

// // Exemplo de uso
// const exemploInput: string[] = ['abc', '123', 'xyz'];
// const resultado: string[] = transpose(exemploInput);
// console.log(resultado);

