import {
  victoriesHome,
  pointHome,
  lossesHome,
  drawsHome,
  goalsFavor,
  ownGoals,
  totalScore,
  efficiencyTotal,
} from '../middlewares/homeCalculate';
import { getTeam } from './teamsService';
import Match from '../database/models/match';
import Team from '../database/models/team';
import { IHome } from '../interfaces/interfaceLeaderBoard';

export const getAllHomeMatch = async () => {
  const result = await Match.findAll({
    where: {
      inProgress: false,
    },
    include: [
      {
        model: Team,
        as: 'teamHome',
        attributes: {
          exclude: ['id'],
        },
      },
    ],
  });
  return result as unknown as IHome[];
};

export const homeLearderBoarder = async () => {
  const teams = await getTeam();
  const matches = await getAllHomeMatch();
  const mapMatch = teams.map((team) => {
    const result = matches.filter((match) => match.teamHome.teamName === team.teamName);
    return {
      name: team.teamName,
      totalPoints: pointHome(result),
      totalGames: result.length,
      totalVictories: victoriesHome(result),
      totalDraws: drawsHome(result),
      totalLosses: lossesHome(result),
      goalsFavor: goalsFavor(result),
      goalsOwn: ownGoals(result),
      goalsBalance: totalScore(result),
      efficiency: efficiencyTotal(result),
    };
  });
  return mapMatch;
};

export const learderBoarderSort = async () => {
  const result = await homeLearderBoarder();

  result.sort(
    (a, b) => {
      if (b.totalPoints > a.totalPoints) return 1;
      if (b.totalPoints < a.totalPoints) return -1;

      if (b.totalVictories > a.totalVictories) return 1;
      if (b.totalVictories < a.totalVictories) return -1;

      if (b.goalsBalance > a.goalsBalance) return 1;
      if (b.goalsBalance < a.goalsBalance) return -1;

      if (b.goalsFavor > a.goalsFavor) return 1;
      if (b.goalsFavor < a.goalsFavor) return -1;

      if (b.goalsOwn > a.goalsOwn) return 1;
      if (b.goalsOwn > a.goalsOwn) return -1;

      return 0;
    },
  );
  return result;
};
