import { Router } from 'express';

import { CreateNewsController } from './controllers/news/CreateNewsController';
import { ListNewsByIdController } from './controllers/news/ListNewsByIdController';
import { ListAllNewsController } from './controllers/news/ListAllNewsController';
import { UpdateNewsController } from './controllers/news/UpdateNewsController';

const router = Router();

const createNewsController = new CreateNewsController();
const listAllNewsController = new ListAllNewsController();
const listNewsByIdController = new ListNewsByIdController();
const updateNewsController = new UpdateNewsController();

router.post('/news/create', createNewsController.handle);

router.get('/news', listAllNewsController.handle);

router.get('/news/details', listNewsByIdController.handle);

router.put('/news/update', updateNewsController.handle);


export { router };