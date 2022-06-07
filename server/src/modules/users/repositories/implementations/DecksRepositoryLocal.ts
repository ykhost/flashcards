/* eslint-disable no-use-before-define */
import { Deck } from "../../model/Deck";
import { ICreateDeckDTO, IDeckRepository } from "../IDeckRepository";

class DecksRepositoryLocal implements IDeckRepository {
  private decks: Deck[];

  private static INSTANCE: DecksRepositoryLocal;

  private constructor() {
    this.decks = [];
  }

  public static getInstace(): DecksRepositoryLocal {
    if (!DecksRepositoryLocal.INSTANCE) {
      DecksRepositoryLocal.INSTANCE = new DecksRepositoryLocal();
    }
    return DecksRepositoryLocal.INSTANCE;
  }

  create({ name, card, category }: ICreateDeckDTO): void {
    const deck = new Deck();
    Object.assign(deck, {
      name,
      card,
      category,
      created_at: new Date(),
    });
    this.decks.push(deck);
  }

  findByUserName(name: string): Deck {
    const deck = this.decks.find((deck) => deck.name === name);
    return deck;
  }

  list(): Deck[] {
    return this.decks;
  }
}

export { DecksRepositoryLocal };
