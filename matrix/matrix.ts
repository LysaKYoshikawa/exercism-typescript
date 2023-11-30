
export class Matrix {
  private matrix: number[][];

  constructor(matrixString: string) {
    this.matrix = matrixString.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    const columnCount = this.matrix[0].length;
    return Array.from({ length: columnCount }, (_, columnIndex) =>
      this.matrix.map(row => row[columnIndex])
    );
  }
}
