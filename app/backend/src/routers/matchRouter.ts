import { Router } from 'express';
import { validateToken } from '../middlewares/jwt';
import matchRequired from '../middlewares/errorMatch';
import { matchController, matchesCreate } from '../controllers/matchesController';

const matchRouter = Router();

matchRouter.get('/', matchController);
matchRouter.post('/', validateToken, matchRequired, matchesCreate);
/* matchRouter.patch('/:id/finish', allMatchUpdate);
matchRouter.patch('/:id', allMatcheUpdate);
 */
export default matchRouter;
