import { User } from "../model/User";

interface ICreateUserDTO {
  username: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  create({ username, email, password }: ICreateUserDTO): void;
  findByUserName(username: string): User;
  list(): User[];
}

export { ICreateUserDTO, IUsersRepository };
