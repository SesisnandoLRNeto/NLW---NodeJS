import { Router } from "express";
import { CreateUsersController } from "./database/controllers/CreateUsersController";

const router = Router();

const createUsersController = new CreateUsersController();

router.post("/users", createUsersController.handle);

export { router };
