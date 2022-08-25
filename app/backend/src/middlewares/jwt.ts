import * as jwt from 'jsonwebtoken';
import { Ilogin } from '../interfaces/Ilogin';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'secret';

function tokenGenerate(data: Ilogin) {
  const payload = { data };
  const token = jwt.sign(payload, secret, { expiresIn: '7d' });
  return token;
}

export default tokenGenerate;
