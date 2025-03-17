import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async() => {
    // const result = await prisma.post.updateMany({
    // where : {
    //     published:true
    // },
    // data:{
    //     title:'title',
    //     content:'content',
    //     published:true,
    //     authorName:'saiful tamim'
    // }
    // })

    const result = await prisma.post.upsert({
        where : {
            id:1
        },
        update:{
            title:'upsert title'
        },
        create:{
            title:'title 1',
            content:'content2',
            authorName:'fahim'
        }
    })

    console.log({result})
}
// main()