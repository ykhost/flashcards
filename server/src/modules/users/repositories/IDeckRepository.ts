import { Deck } from "../model/Deck";

interface ICreateDeckDTO {
  name: string;
  card: string[];
  category: string;
}

interface IDeckRepository {
  create({ name, card, category }: ICreateDeckDTO): void;
  findByUserName(name: string): Deck;
  list(): Deck[];
}

export { ICreateDeckDTO, IDeckRepository };
