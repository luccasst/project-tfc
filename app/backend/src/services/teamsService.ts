import Team from '../database/models/team';
import { ITeam } from '../interfaces/teamsInterface';

const getTeam = async (): Promise <ITeam[]> => {
  const team = await Team.findAll();
  return team;
};

export default getTeam;
