import { Router } from 'express';
import { validateToken } from '../middlewares/jwt';
import { LoginController, getRole } from '../controllers/loginController';
import loginRequired from '../middlewares/errorEmail';

const LoginRouter = Router();

LoginRouter.post('/', loginRequired, LoginController);
LoginRouter.get('/validate', validateToken, getRole);

export default LoginRouter;
