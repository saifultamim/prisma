import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async() => {
  
    const offsetData = await prisma.post.findMany({
        skip:3,
        take:2
    })

    const cursorData = await prisma.post.findMany({
        skip:3,
        take:2,
        cursor:{
            id:15 
        }
    })
    const sortedData = await prisma.post.findMany({
        orderBy:{
            title:'desc'
        },
        skip:4,
        take:2,
        where:{
            published:true
        }
    })

    console.log({sortedData,offsetData,cursorData})
}

main()