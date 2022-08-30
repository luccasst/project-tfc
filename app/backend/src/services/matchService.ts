import Team from '../database/models/team';
import Match from '../database/models/match';
import { IMatches } from '../interfaces/matchInterface';

export const getMatchAll = async () => {
  const matches = await Match.findAll({
    include: [
      {
        model: Team,
        as: 'teamHome',
        attributes: ['teamName'] },
      {
        model: Team,
        as: 'teamAway',
        attributes: ['teamName'] },
    ],
  });
  return matches;
};

export const getMatchAllInprogress = async (value: boolean) => {
  const matchInprogress = await Match.findAll({
    where: { inProgress: value },
    include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ],
  });
  return matchInprogress;
};

export const matchCreat = async (obj: IMatches) => {
  const inProgress = true;
  const newMatch = await Match
    .create(obj);
  const {
    id,
    homeTeam,
    homeTeamGoals,
    awayTeam,
    awayTeamGoals } = newMatch;
  return {
    id,
    homeTeam,
    homeTeamGoals,
    awayTeam,
    awayTeamGoals,
    inProgress,
  };
};
