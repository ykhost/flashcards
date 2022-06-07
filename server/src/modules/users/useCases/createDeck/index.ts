import { DecksRepositoryLocal } from "../../repositories/implementations/DecksRepositoryLocal";
import { CreateDeckController } from "./CreateDeckController";
import { CreateDeckUseCase } from "./CreateDeckUseCase";

const decksRepositoryLocal = DecksRepositoryLocal.getInstance();

const createDeckUseCase = new CreateDeckUseCase(decksRepositoryLocal);

const createDeckController = new CreateDeckController(createDeckUseCase);

export { createDeckController };
