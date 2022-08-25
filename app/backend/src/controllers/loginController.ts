import { Request, Response } from 'express';
import LoginService from '../services/loginService';
import tokenGenerate from '../middlewares/jwt';

class LoginController {
  static async login(req:Request, res: Response) {
    await LoginService.login(req.body);
    const token = tokenGenerate(req.body);
    return res.status(200).json({ token });
  }
}

export default LoginController;
