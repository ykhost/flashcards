import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private UsersRepositoryLocal: IUsersRepository) {}
  execute({ username, email, password }: IRequest) {
    const userAlreadyExists =
      this.UsersRepositoryLocal.findByUserName(username);
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    this.UsersRepositoryLocal.create({ username, email, password });
  }
}

export { CreateUserUseCase };
