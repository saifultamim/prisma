import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async() => {
    const result = await prisma.post.create({
        data:{
            title:"this is title3",
            content:"this is content3",
            authorName:"Shaiful Islam"
        }
    })

    const getAllData = await prisma.post.findMany()
    console.log("Get Data : ",getAllData)
}
// main()