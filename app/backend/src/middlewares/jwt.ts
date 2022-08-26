import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Ilogin } from '../interfaces/Ilogin';

const secret = process.env.JWT_SECRET || 'secret';

const tokenGenerate = async (data: Ilogin) => {
  const payload = { data };
  const token = jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: '7d' });
  return token;
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decode = jwt.verify(token, secret) as jwt.JwtPayload;

    req.body.user = decode;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export { tokenGenerate, validateToken };
