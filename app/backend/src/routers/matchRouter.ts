import { Router } from 'express';
import matchController from '../controllers/matchesController';

const matchRouter = Router();

matchRouter.get('/', matchController);

export default matchRouter;
