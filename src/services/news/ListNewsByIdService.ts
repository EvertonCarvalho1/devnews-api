import prismaClient from "../../prisma";

interface NewsRequest {
    news_id: string;
}

class ListNewsByIdService {
    async execute({ news_id }: NewsRequest) {
        const findById = await prismaClient.news.findUnique({
            where: {
                id: news_id
            }
        });

        return findById;
    }
}

export { ListNewsByIdService }