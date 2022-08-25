import Users from '../database/models/user';

class LoginService {
  static async login(email: string) {
    const user = await Users.findOne({ where: { email }, raw: true });
    return user;
  }
}

export default LoginService;
