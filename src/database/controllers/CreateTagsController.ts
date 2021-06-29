import { Request, Response } from "express";
import { CreateTagsServices } from "../services/CreateTagsServices";

class CreateTagsController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const createTagsService = new CreateTagsServices();

    const tag = await createTagsService.execute(name);

    return res.json(tag);
  }
}

export { CreateTagsController };
