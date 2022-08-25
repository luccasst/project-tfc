import { Model, STRING } from 'sequelize';
import Match from './match';
import db from '.';

class Team extends Model {
  id?: number;
  teamName: string;
}

Team.init({
  teamName: STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

Team.hasMany(Match, { foreignKey: 'awayTeam', as: 'teamAway' });
Team.hasMany(Match, { foreignKey: 'homeTeam', as: 'teamHome' });

export default Team;