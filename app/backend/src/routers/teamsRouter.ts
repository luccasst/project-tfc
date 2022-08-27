import { Router } from 'express';
import getTeamAll from '../controllers/teamsController';

const teamRouter = Router();

teamRouter.get('/', getTeamAll);

export default teamRouter;
