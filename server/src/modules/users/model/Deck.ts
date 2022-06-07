import { v4 as uuidv4 } from "uuid";

class Deck {
  id?: string;
  name: string;
  cards: string[];
  category: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Deck };
