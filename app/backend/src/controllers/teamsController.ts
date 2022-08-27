import { Request, Response } from 'express';
import getTeam from '../services/teamsService';

const getTeamAll = async (req: Request, res: Response) => {
  const team = await getTeam();
  return res.status(200).json(team);
};

export default getTeamAll;
