import prismaClient from "../../prisma";

interface NewsRequest {
    news_id: string
}

class DeleteNewsService {
    async execute({ news_id }: NewsRequest) {
        const news = await prismaClient.news.delete({
            where: {
                id: news_id
            }
        });

        return news;
    }
}

export { DeleteNewsService }