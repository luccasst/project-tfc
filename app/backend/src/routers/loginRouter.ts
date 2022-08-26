import { Router } from 'express';
import { LoginController, getRole } from '../controllers/loginController';
import { tokenGenerate } from '../middlewares/jwt';
import loginRequired from '../middlewares/errorEmail';

const LoginRouter = Router();

LoginRouter.post('/', loginRequired, LoginController);
LoginRouter.get('/validate', tokenGenerate, getRole);

export default LoginRouter;
