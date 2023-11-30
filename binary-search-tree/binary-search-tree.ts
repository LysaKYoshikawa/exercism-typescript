export class BinarySearchTree<T> {
  private value: T;
  private leftChild: BinarySearchTree<T> | undefined;
  private rightChild: BinarySearchTree<T> | undefined;

  constructor(data: T) {
    this.value = data;
  }

  public get data(): T {
    return this.value;
  }

  public get right(): BinarySearchTree<T> | undefined {
    return this.rightChild;
  }

  public get left(): BinarySearchTree<T> | undefined {
    return this.leftChild;
  }

  public insert(item: T): void {
    if (this.compare(item, this.value) <= 0) {
      if (this.leftChild === undefined) {
        this.leftChild = new BinarySearchTree(item);
      } else {
        this.leftChild.insert(item);
      }
    } else {
      if (this.rightChild === undefined) {
        this.rightChild = new BinarySearchTree(item);
      } else {
        this.rightChild.insert(item);
      }
    }
  }

  private compare(a: T, b: T): number {
    
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  public each(callback: (data: T) => void): void {
    if (this.leftChild !== undefined) {
      this.leftChild.each(callback);
    }

    callback(this.value);

    if (this.rightChild !== undefined) {
      this.rightChild.each(callback);
    }
  }
}

export function recordAllData<T>(bst: BinarySearchTree<T>): T[] {
  const out: T[] = [];
  bst.each((data) => {
    out.push(data);
  });
  return out;
}