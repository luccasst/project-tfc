import * as jwt from 'jsonwebtoken';
import Users from '../database/models/user';
import { tokenGenerate } from '../middlewares/jwt';
import { IuserPayload } from '../interfaces/interfacePayload';
import Ilogin from '../interfaces/Ilogin';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export const LoginService = async (data: IuserPayload) => {
  const userLogin = await Users.findOne({ where: { email: data.email } });

  if (!userLogin) return null;

  const { id, username, email, role } = userLogin;

  const token = await tokenGenerate({ id, username, email, role });

  return token;
};

export const tokenRole = (authorization: string) => {
  const token = authorization;
  const user = jwt.verify(token, secret);
  return user as Ilogin;
};
