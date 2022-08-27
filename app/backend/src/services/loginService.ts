import Users from '../database/models/user';
import { tokenGenerate } from '../middlewares/jwt';
import { IuserPayload } from '../interfaces/interfacePayload';

const LoginService = async (data: IuserPayload) => {
  const userLogin = await Users.findOne({ where: { email: data.email } });

  if (!userLogin) return null;

  const { id, username, email, role } = userLogin;

  const token = await tokenGenerate({ id, username, email, role });

  return token;
};

export default LoginService;
