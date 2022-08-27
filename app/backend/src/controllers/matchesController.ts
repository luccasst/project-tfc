import { Request, Response } from 'express';
import getMatchAll from '../services/matchService';

const matchController = async (req: Request, res: Response) => {
  const matchList = await getMatchAll.findAll();
  return res.status(200).json(matchList);
};

export default matchController;
