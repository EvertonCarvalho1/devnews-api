import { Router } from 'express';

import { CreateNewsController } from './controllers/news/CreateNewsController';
import { ListNewsByIdController } from './controllers/news/ListNewsByIdController';
import { ListAllNewsController } from './controllers/news/ListAllNewsController';
import { UpdateNewsController } from './controllers/news/UpdateNewsController';
import { DeleteNewsController } from './controllers/news/DeleteNewsController';

const router = Router();

const createNewsController = new CreateNewsController();
const listAllNewsController = new ListAllNewsController();
const listNewsByIdController = new ListNewsByIdController();
const updateNewsController = new UpdateNewsController();
const deleteNewsController = new DeleteNewsController();

router.post('/news/create', createNewsController.handle);

router.get('/news', listAllNewsController.handle);

router.get('/news/details', listNewsByIdController.handle);

router.put('/news/update', updateNewsController.handle);

router.delete('/news/delete', deleteNewsController.handle);


export { router };