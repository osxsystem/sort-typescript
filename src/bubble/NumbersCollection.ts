import {SorterAbstract} from "./SorterAbstract";

export class NumbersCollection extends SorterAbstract {

  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if(this.data[leftIndex] > this.data[rightIndex]) {
      return true;
    }
    return false;
  }

  swap(left: number, right: number): void {
    const leftHand = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = leftHand;
  }
}
