import { Request, Response } from 'express';
import { CreateNewsService } from '../../services/news/CreateNewsService'

class CreateNewsController {
    async handle(req: Request, res: Response) {
        const {
            title,
            subtitle,
            content
        } = req.body;

        const createNewsService = new CreateNewsService();

        const news = await createNewsService.execute({
            title,
            subtitle,
            content
        });

        return res.json(news);
    }
}

export { CreateNewsController }