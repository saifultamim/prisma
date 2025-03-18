import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    const groupBy = await prisma.post.groupBy({
        by:['published','authorId'],
        _count:{
            title:true
        },
       having:{
        published:true
       }
    })
    console.log(groupBy)
}

// main()