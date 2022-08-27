import { Router } from 'express';
import { getTeamAll, getTeamById } from '../controllers/teamsController';

const teamRouter = Router();

teamRouter.get('/', getTeamAll);
teamRouter.get('/:id', getTeamById);

export default teamRouter;
