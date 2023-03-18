import { decode } from 'html-entities';

/**
 * Fish-Yates Shuffle
 *
 * @see https://bost.ocks.org/mike/shuffle/
 *
 * @param {any[]} array array of any data
 * @returns shuffled array
 */
export function shuffleArray(array: any[]): any[] {
  const copy = array;
  const shuffled = [];

  let count = array.length;
  let index;

  while (count) {
    index = Math.floor(Math.random() * copy.length);

    if (index in copy) {
      shuffled.push(copy[index]);
      copy.splice(index, 1);
      count--;
    }
  }

  return shuffled;
}

export function parseString(str: string) {
  return decode(str);
}
