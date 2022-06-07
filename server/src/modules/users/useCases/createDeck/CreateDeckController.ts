import { Request, Response } from "express";

import { CreateDeckUseCase } from "./CreateDeckUseCase";

class CreateDeckController {
  constructor(private createUserUseCase: CreateDeckUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, card, category } = req.body;

    this.createUserUseCase.execute({ name, card, category });

    return res.status(201).send();
  }
}

export { CreateDeckController };
