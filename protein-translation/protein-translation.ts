class CodonGraph {
  private codonMapping: { [codon: string]: string } = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP',
  };

  translate(rnaSequence: string): string[] {
    const proteins: string[] = [];
    for (let i = 0; i < rnaSequence.length; i += 3) {
      const codon = rnaSequence.slice(i, i + 3);
      const aminoAcid = this.codonMapping[codon];

      if (!aminoAcid) {
        throw new Error('Invalid codon');
      }

      if (aminoAcid === 'STOP') {
        break; 
      }

      proteins.push(aminoAcid);
    }

    return proteins;
  }
}


export const translate = (rnaSequence: string): string[] => {
  const codonGraph = new CodonGraph();
  return codonGraph.translate(rnaSequence);
};
