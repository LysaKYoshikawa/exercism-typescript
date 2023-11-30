export class Anagram {
  private word: string;

  constructor(word: string) {
    this.word = word.toLowerCase();
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((potential) =>
      this.isAnagram(potential.toLowerCase())
    );
  }

  private isAnagram(candidate: string): boolean {
    if (this.word.length !== candidate.length || this.word === candidate) {
      return false;
    }

    const wordSorted = this.sortString(this.word);
    const candidateSorted = this.sortString(candidate);

    return wordSorted === candidateSorted;
  }

  private sortString(str: string): string {
    return str.split('').sort().join('');
  }
}

