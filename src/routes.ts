import { Router } from 'express';

import { CreateNewsController } from './controllers/CreateNewsController';


const router = Router();

const createNewsController = new CreateNewsController();

router.post('/news', createNewsController.handle)

export { router };