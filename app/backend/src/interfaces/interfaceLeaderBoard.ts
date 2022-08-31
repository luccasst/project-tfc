export interface IHome {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  teamHome: {
    teamName: string;
  };
}

export interface IAway {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  teamAway: {
    teamName: string;
  };
}
