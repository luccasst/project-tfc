import { ErrorRequestHandler } from 'express';

const middlewareError: ErrorRequestHandler = (err, _req, res) => {
  if (!err.status) return res.status(500).json({ message: 'Internal Server Error' });

  const { status, message } = err;

  res.status(status).json({ message });
};

export default middlewareError;
