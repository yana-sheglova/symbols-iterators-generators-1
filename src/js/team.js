import Character from './character';

export default class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    if (character instanceof Character) {
      this.characters.push(character);
    } else {
      throw new Error('Не является объектом типа Character');
    }
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.characters.length) {
          return { value: this.characters[index++], done: false };
        }
        return { done: true };
      },
    };
  }
}
