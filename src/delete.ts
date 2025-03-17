import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async() => {
   const result = await prisma.post.deleteMany({
    where:{
        published:false
    }
   })


    console.log({result})
}
// main()