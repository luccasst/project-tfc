import { Request, Response } from 'express';
import { learderBoarderSort } from '../services/leaderBoardService';

const getLearderBoardHome = async (req: Request, res: Response) => {
  const home = await learderBoarderSort();

  if (!home) return res.status(404).json();

  return res.status(200).json(home);
};

export default getLearderBoardHome;
