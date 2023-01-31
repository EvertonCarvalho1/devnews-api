import prismaClient from "../../prisma";

interface CreateNewsRequest {
    title: string;
    subtitle: string;
    content: string;
}

class CreateNewsService {
    async execute({ title, subtitle, content }: CreateNewsRequest) {


        return { title: title }
    }
}

export { CreateNewsService }