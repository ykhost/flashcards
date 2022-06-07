import { Router } from "express";

import { createDeckController } from "../modules/users/useCases/createDeck";

const decksRoutes = Router();

decksRoutes.post("/register", (req, rest) => {
  return createDeckController.handle(req, rest);
});

export { decksRoutes };
