import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUsersService {
  async execute({ name, email, admin }: IUserRequest) {
    //getCustomer is necessary when we will use repositories wiht particulars methods
    //else just use the sentence ... = new UsersRepository();
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUsersService };
