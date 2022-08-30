import { Router } from 'express';
import { LoginController, getRole } from '../controllers/loginController';
import loginRequired from '../middlewares/errorEmail';

const LoginRouter = Router();

LoginRouter.post('/', loginRequired, LoginController);
LoginRouter.get('/validate', getRole);

export default LoginRouter;
