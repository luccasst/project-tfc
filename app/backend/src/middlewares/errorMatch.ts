import { NextFunction, Request, Response } from 'express';
import Team from '../database/models/team';

const matchRequired = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams' });
  }
  const homeExist = await Team.findOne({ where: { id: homeTeam } });
  const awayExist = await Team.findOne({ where: { id: awayTeam } });

  if (!homeExist || !awayExist) {
    return res.status(404).json({
      message: 'There is no team with such id!',
    });
  }
  next();
};

export default matchRequired;
