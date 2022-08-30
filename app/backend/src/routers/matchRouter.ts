import { Router } from 'express';
import { validateToken } from '../middlewares/jwt';
import matchRequired from '../middlewares/errorMatch';
import { matchController,
  matchesCreate, allMatchFinish } from '../controllers/matchesController';

const matchRouter = Router();

matchRouter.get('/', matchController);
matchRouter.post('/', validateToken, matchRequired, matchesCreate);
matchRouter.patch('/:id/finish', allMatchFinish);
/* matchRouter.patch('/:id', allMatcheUpdate); */

export default matchRouter;
