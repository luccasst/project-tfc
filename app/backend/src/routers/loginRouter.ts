import { Router } from 'express';
import LoginController from '../controllers/loginController';

const LoginRouter = Router();

LoginRouter.post('/', LoginController.login);

export default LoginRouter;
