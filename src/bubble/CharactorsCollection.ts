import { Sortable } from "./Sorter";
import {SorterAbstract} from "./SorterAbstract";

export class CharactorsCollection extends SorterAbstract {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const character = this.data.split('');
    const leftHand = character[left];
    character[left] = character[right];
    character[right] = leftHand;
    this.data = character.join('');
  }
}
