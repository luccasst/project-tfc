import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export const LoginController = async (req: Request, res: Response) => {
  const user = await LoginService(req.body);
  return res.status(200).json({ token: user });
};

export const getRole = (req: Request, res: Response) => res.status(200).json({
  role: req.body.user.role,
});
