import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";

const usersRoutes = Router();

usersRoutes.post("/register", (req, rest) => {
  return createUserController.handle(req, rest);
});

export { usersRoutes };
