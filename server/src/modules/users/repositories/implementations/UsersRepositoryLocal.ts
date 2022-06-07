/* eslint-disable no-use-before-define */
import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUserRepository";

class UsersRepositoryLocal implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepositoryLocal;

  private constructor() {
    this.users = [];
  }

  public static getInstace(): UsersRepositoryLocal {
    if (!UsersRepositoryLocal.INSTANCE) {
      UsersRepositoryLocal.INSTANCE = new UsersRepositoryLocal();
    }
    return UsersRepositoryLocal.INSTANCE;
  }

  create({ username, email, password }: ICreateUserDTO): void {
    const user = new User();
    Object.assign(user, {
      username,
      email,
      password,
      created_at: new Date(),
    });
    this.users.push(user);
  }

  findByUserName(username: string): User {
    const user = this.users.find((user) => user.username === username);
    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepositoryLocal };
