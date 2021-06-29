import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";

class CreateTagsServices {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new Error("Incorrect name");
    }

    //SELECT * FROM TAGS WHERE name='name'
    const tagsAlreadyExists = await tagsRepository.findOne({ name });

    if (tagsAlreadyExists) {
      throw new Error("Tags already exists");
    }

    const tag = tagsRepository.create({ name });

    await tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagsServices };
