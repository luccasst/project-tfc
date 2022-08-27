import Team from '../database/models/team';
import { ITeam } from '../interfaces/teamsInterface';

export const getTeam = async (): Promise <ITeam[]> => {
  const team = await Team.findAll();
  return team;
};

export const getByIdTeam = async (id: number) => {
  const team = await Team.findByPk(id);
  if (!team) return null;
  return team;
};
