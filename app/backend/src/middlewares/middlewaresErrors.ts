import { Request, Response, NextFunction } from 'express';
import ThrowErrors from '../utils/ThrowErrors';

const error = (err: ThrowErrors, _req: Request, res: Response, _next: NextFunction) => {
  const { message, status } = err as ThrowErrors;
  res.status(status || 500).json({ message });
};

export default error;
