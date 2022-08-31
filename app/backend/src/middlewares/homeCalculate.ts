import { IHome } from '../interfaces/interfaceLeaderBoard';

export const victoriesHome = (matches: IHome[]) => {
  let victorie = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      victorie += 1;
    }
  });
  return victorie;
};

export const pointHome = (matches: IHome[]) => {
  let score = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) score += 3;

    if (match.homeTeamGoals === match.awayTeamGoals) score += 1;
  });
  return score;
};

export const lossesHome = (matches: IHome[]) => {
  let losse = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      losse += 1;
    }
  });
  return losse;
};

export const drawsHome = (matches: IHome[]) => {
  let draws = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) {
      draws += 1;
    }
  });
  return draws;
};

export const goalsFavor = (matches: IHome[]) => {
  let goals = 0;

  matches.forEach((match) => {
    if (match.homeTeamGoals) goals += match.homeTeamGoals;
  });
  return goals;
};

export const ownGoals = (matches: IHome[]) => {
  let goals = 0;

  matches.forEach((match) => {
    if (match.awayTeamGoals) goals += match.awayTeamGoals;
  });
  return goals;
};

export const totalScore = (matches: IHome[]) => {
  const homeTeamGoals = goalsFavor(matches);
  const awayTeamGoals = ownGoals(matches);

  const gols = homeTeamGoals - awayTeamGoals;
  return gols;
};

export const efficiencyTotal = (matches: IHome[]) => {
  const point = pointHome(matches);
  const match = matches.length * 3;
  const efficiency = point / match;

  if (!Number.isInteger(efficiency * 100)) {
    return (efficiency * 100).toFixed(2);
  }
  return (efficiency * 100);
};
