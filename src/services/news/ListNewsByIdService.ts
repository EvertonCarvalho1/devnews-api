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

        if (!findById) {
            throw new Error("This news does not exist!");
        }

        return findById;
    }
}

export { ListNewsByIdService }