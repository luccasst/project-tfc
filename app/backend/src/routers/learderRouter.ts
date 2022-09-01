import { Router } from 'express';
import getLearderBoardHome from '../controllers/leaderBoardController';

const learderRouter = Router();

learderRouter.get('/home', getLearderBoardHome);

export default learderRouter;
