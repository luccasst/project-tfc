import { NextFunction, Request, Response } from 'express';
import { compareSync } from 'bcryptjs';
import Users from '../database/models/user';

const loginRequired = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

  const loginUser = await Users.findOne({ where: { email } });

  if (!loginUser) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  if (!compareSync(password, loginUser.password)) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
};

export default loginRequired;
