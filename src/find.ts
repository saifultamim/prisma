
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async() => {
 
    const getUniqueData = await prisma.post.findUniqueOrThrow({
        where:{
            id:5
        },
      select:{
        title:true,
        authorName:true
      }
    })
    console.log("Get Data : ",getUniqueData)
}
 main()