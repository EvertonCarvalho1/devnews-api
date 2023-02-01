import prismaClient from "../../prisma";

class ListAllNewsService {
    async execute() {
        const news = await prismaClient.news.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        return news;
    }
}

export { ListAllNewsService }