import bcrypt from 'bcrypt';

import { config } from '../config';
import UserDao, { IUserModel } from '../daos/UserDao';
import { IUser } from '../models/User';
import { UnabletoSaveUserError, InvalidUsernameOrPasswordError} from '../utils/libraryErrors';

export async function register(user: IUser): Promise<IUserModel> {
  const ROUNDS = config.server.rounds;

  try {
    const hashedPassword = await bcrypt.hash(user.password, ROUNDS);

    const saved = new UserDao({ ...user, password: hashedPassword });

    return await saved.save();
  } catch (error: any) {
    console.error("Error in UserService register function:", error);
    throw new UnabletoSaveUserError(error.message);
  }
}

export async function login(credentials: { email: string, password: string }): Promise<IUserModel> {
  const { email, password } = credentials;

  try {
    const user = await UserDao.findOne({ email });

    if (!user) {
      throw new InvalidUsernameOrPasswordError("Invalid username or password");
    } else {
      const validPassword: boolean = await bcrypt.compare(password, user.password);

      if (validPassword) {
        return user;
      } else {
        throw new InvalidUsernameOrPasswordError("Invalid username or password");
      }
    }
  } catch (error: any) {
    throw error;
  }
}


