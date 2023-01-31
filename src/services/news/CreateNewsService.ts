import prismaClient from "../../prisma";

interface CreateNewsRequest {
    title: string;
    subtitle: string;
    content: string;
}

class CreateNewsService {
    async execute({
        title,
        subtitle,
        content
    }: CreateNewsRequest) {

        if (!title) {
            throw new Error("Enter the title of the news");
        }

        if (!subtitle) {
            throw new Error("Enter the subtitle of the news");
        }

        if (!content) {
            throw new Error("Inform the news content");
        }

        const newsAlredyExists = await prismaClient.news.findFirst({
            where: {
                title: title
            }
        });

        if (newsAlredyExists) {
            throw new Error("News already exists");
        }

        const news = await prismaClient.news.create({
            data: {
                title: title,
                subtitle: subtitle,
                content: content
            }
        });

        return news;
    }
}

export { CreateNewsService }