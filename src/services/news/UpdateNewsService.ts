import prismaClient from "../../prisma";

interface NewsRequest {
    news_id: string;
    title: string;
    subtitle: string;
    content: string;
}

class UpdateNewsService {
    async execute({ news_id, title, subtitle, content }: NewsRequest) {

        const newsReallyExists = await prismaClient.news.findFirst({
            where: {
                id: news_id
            }
        });

        if (!news_id) {
            throw new Error("The news id is required!");
        }

        if (!title) {
            throw new Error("The news title is required!");
        }

        if (!subtitle) {
            throw new Error("The news subtitle is required!");
        }

        if (!content) {
            throw new Error("The news content is required!");
        }

        if (!newsReallyExists) {
            throw new Error("This news does not exist!");
        }

        const news = await prismaClient.news.update({
            where: {
                id: news_id
            },
            data: {
                title: title,
                subtitle: subtitle,
                content: content
            }
        });

        return news;
    }
}

export { UpdateNewsService }
