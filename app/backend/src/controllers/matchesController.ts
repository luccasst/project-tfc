import { Request, Response } from 'express';
import { getMatchAll,
  getMatchAllInprogress, matchCreat, matchFinish } from '../services/matchService';

export const matchController = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  let matches;

  if (inProgress) {
    const valueInprogress = inProgress === 'true';
    matches = await getMatchAllInprogress(valueInprogress);

    return res.status(200).json(matches);
  }
  matches = await getMatchAll();
  return res.status(200).json(matches);
};

export const matchesCreate = async (req: Request, res: Response) => {
  const match = req.body;
  const matchNew = await matchCreat(match);
  return res.status(201).json(matchNew);
};

export const allMatchFinish = async (req: Request, res: Response) => {
  const { id } = req.params;
  const matchFinished = await matchFinish(Number(id));
  if (!matchFinished) return 'It is not possible to update!';
  return res.status(200).json({ message: 'Finished' });
};
