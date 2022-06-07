import { UsersRepositoryLocal } from "../../repositories/implementations/UsersRepositoryLocal";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepositoryLocal = UsersRepositoryLocal.getInstace();

const createUserUseCase = new CreateUserUseCase(usersRepositoryLocal);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
