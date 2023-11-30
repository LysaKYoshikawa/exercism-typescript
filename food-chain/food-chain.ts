export function verse(animal: number): string {
  const animals: string[] = [
    'fly',
    'spider',
    'bird',
    'cat',
    'dog',
    'goat',
    'cow',
    'horse',
  ];

  const animalName = animals[animal - 1];

  const lines: string[] = [
    `I know an old lady who swallowed a ${animalName}.`,
    `I don't know why she swallowed the ${animalName}. Perhaps she'll die.`,
  ];

  if (animal > 1 && animal < animals.length) {
    for (let i = animal; i > 1; i--) {
      const currentAnimal = animals[i - 1];
      const previousAnimal = animals[i - 2];
      const action =
        currentAnimal === 'spider'
          ? `It wriggled and jiggled and tickled inside her.`
          : `She swallowed the ${currentAnimal} to catch the ${previousAnimal}${
              previousAnimal === 'spider' ? ' that wriggled and jiggled and tickled inside her.' : '.'
            }`;

      lines.push(action);

      // If it's the last line, add an additional line for the spider
      if (i === 2) {
        lines.push(`I don't know why she swallowed the spider. Perhaps she'll die.`);
      }
    }
  }

  return lines.join('\n') + '\n';
}

export function verses(start: number, end: number): string {
  const result: string[] = [];
  for (let i = start; i <= end; i++) {
    result.push(verse(i));
  }
  return result.join('\n') + '\n';
}
