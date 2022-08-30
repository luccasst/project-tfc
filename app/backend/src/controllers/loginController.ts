import { Request, Response } from 'express';
import { LoginService, tokenRole } from '../services/loginService';

export const LoginController = async (req: Request, res: Response) => {
  const user = await LoginService(req.body);
  return res.status(200).json({ token: user });
};

export const getRole = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const user = await tokenRole(authorization as string);
  return res.status(200).json({ role: user.role });
};
