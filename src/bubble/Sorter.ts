
export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {
    this.collection = collection;
  }

  sort(): void {
    for (let index = 0; index < this.collection.length; index++) {
      for (let j = 0; j < this.collection.length - index - 1; j++) {
        if(this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

