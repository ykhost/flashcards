import { IDeckRepository } from "../../repositories/IDeckRepository";

interface IRequest {
  name: string;
  card: string[];
  category: string;
}

class CreateDeckUseCase {
  constructor(private UsersRepositoryLocal: IDeckRepository) {}
  execute({ name, card, category }: IRequest) {
    const userAlreadyExists = this.UsersRepositoryLocal.findByUserName(name);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    this.UsersRepositoryLocal.create({ name, card, category });
  }
}

export { CreateDeckUseCase };
