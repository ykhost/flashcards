import { Router } from "express";

import { decksRoutes } from "./deck.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("/user", usersRoutes);
router.use("/deck", decksRoutes);

export { router };
