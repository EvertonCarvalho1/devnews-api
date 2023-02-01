import { Request, Response } from 'express';
import { UpdateNewsService } from '../../services/news/UpdateNewsService'

class UpdateNewsController {
    async handle(req: Request, res: Response) {
        const { news_id, title, subtitle, content } = req.body;

        const updateNewsService = new UpdateNewsService();

        const news = await updateNewsService.execute({
            news_id,
            title,
            subtitle,
            content
        });


        return res.json(news);
    }
}

export { UpdateNewsController }