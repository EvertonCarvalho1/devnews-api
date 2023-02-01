import { Request, Response } from 'express';
import { ListNewsByIdService } from '../../services/news/ListNewsByIdService'

class ListNewsByIdController {
    async handle(req: Request, res: Response) {
        const news_id = req.query.news_id as string;

        const listNewsByIdService = new ListNewsByIdService();

        const news = await listNewsByIdService.execute({ news_id });

        return res.json(news);
    }
}

export { ListNewsByIdController }