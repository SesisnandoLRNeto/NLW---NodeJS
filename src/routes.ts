import { Router } from "express";
import { CreateUsersController } from "./database/controllers/CreateUsersController";
import { CreateTagsController } from "./database/controllers/CreateTagsController";
import { ensureAdmin } from "./database/middlewares/ensureAdmin";

const router = Router();

const createUsersController = new CreateUsersController();
const createTagsController = new CreateTagsController();

//To not use the middleware on mode above all request below, better give in routes specific
router.post("/tags", ensureAdmin, createTagsController.handle);
router.post("/users", createUsersController.handle);

export { router };
