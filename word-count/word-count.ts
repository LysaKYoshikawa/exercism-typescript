export function count(input: string): Map<string, number> {
  const words = input.toLowerCase().match(/\b(?:\w+('\w+)?)\b/g);
  const countMap = new Map<string, number>();

  if (words) {
    for (const word of words) {
      const normalizedWord = word.replace(/^'|'$/g, '');
      countMap.set(normalizedWord, (countMap.get(normalizedWord) || 0) + 1);
    }
  }

  return countMap;
}

// segunda forma de resolver:
// export function count(input: string): Map<string, number> {
//   // convertendo para minusculo para facilitar a contagem
//   const words = input
//     .toLowerCase()
//     .match(/\b(?:\w+('\w+)?)\b/g);

//     // se for vazio ele retorna um novo map conforme teste unitario
//   if (!words) {
//     return new Map();
//   }

//   //para cada palavra remove apostrofos no inicio e no fim atualiza o map
//   return words.reduce((countMap, word) => {
//     const normalizedWord = word.replace(/^'|'$/g, ''); // Remove apostrophes at the beginning or end
//     countMap.set(normalizedWord, (countMap.get(normalizedWord) || 0) + 1);
//     return countMap;
//   }, new Map<string, number>());
// }
