import prismaClient from "../../prisma";

interface NewsRequest {
    news_id: string
}

class DeleteNewsService {
    async execute({ news_id }: NewsRequest) {

        const newsReallyExists = await prismaClient.news.findUnique({
            where: {
                id: news_id
            }
        });

        if (!newsReallyExists) {
            throw new Error("This news does not exist!");

        }

        const news = await prismaClient.news.delete({
            where: {
                id: news_id
            }
        });

        return news;
    }
}

export { DeleteNewsService }