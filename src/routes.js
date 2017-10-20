import { Router } from 'express';
import Main from './controllers/Main';

const routes = Router();

routes.get('/', Main);

export default routes;
