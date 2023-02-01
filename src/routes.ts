import { Router } from 'express';

import { CreateNewsController } from './controllers/news/CreateNewsController';
import { ListNewsByIdController } from './controllers/news/ListNewsByIdController';


const router = Router();

const createNewsController = new CreateNewsController();
const listNewsByIdController = new ListNewsByIdController();

router.post('/news', createNewsController.handle);

router.get('/news/details', listNewsByIdController.handle);

export { router };