import { Request, Response } from 'express';
import { DeleteNewsService } from '../../services/news/DeleteNewsService'

class DeleteNewsController {
    async handle(req: Request, res: Response) {
        const news_id = req.query.news_id as string

        const deleteNewsService = new DeleteNewsService();

        const news = await deleteNewsService.execute({
            news_id
        });

        return res.json(news);
    }
}

export { DeleteNewsController }