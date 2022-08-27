import Team from '../database/models/team';
import Match from '../database/models/match';

const getMatchAll = {
  async findAll() {
    const matchs = await Match.findAll({
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
    return matchs;
  },
};

export default getMatchAll;
