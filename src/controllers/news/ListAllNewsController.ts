import { Request, Response } from 'express';
import { ListAllNewsService } from '../../services/news/ListAllNewsService'

class ListAllNewsController {
    async handle(req: Request, res: Response) {
        const listAllNewsService = new ListAllNewsService();

        const news = await listAllNewsService.execute();


        return res.json(news);
    }
}

export { ListAllNewsController }