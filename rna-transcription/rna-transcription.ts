export function toRna(dna: string): string {
  const dnaToRnaMap: { [key: string]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  // Verifica se a entrada é válida
  const isValidDna = /^[GCTA]+$/.test(dna);
  if (!isValidDna) {
    throw new Error('Invalid input DNA.');
  }

  // Converte cada nucleotídeo
  const rnaArray: string[] = [];
  for (let i = 0; i < dna.length; i++) {
    const currentNucleotide = dna[i];

    if (dnaToRnaMap[currentNucleotide]) {
      rnaArray.push(dnaToRnaMap[currentNucleotide]);
    } else {
      // Caso um nucleotídeo inválido seja encontrado
      throw new Error('Invalid input DNA.');
    }
  }

  return rnaArray.join('');
}

