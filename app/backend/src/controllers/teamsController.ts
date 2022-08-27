import { Request, Response } from 'express';
import { getTeam, getByIdTeam } from '../services/teamsService';

export const getTeamAll = async (req: Request, res: Response) => {
  const team = await getTeam();
  return res.status(200).json(team);
};

export const getTeamById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await getByIdTeam(Number(id));
  return res.status(200).json(team);
};
