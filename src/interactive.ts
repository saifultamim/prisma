import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



const interactiveTransaction = async () => {
   const result = await prisma.$transaction(async(tx)=>{
    const getAllPost = await tx.post.findMany({
        where:{
            published:true
        }
    })
    const countUser = await tx.user.count()
    const updateUser = await tx.user.update({
        where:{
            id:5
        },
        data:{
            username:'fahim_Ahmed'
        }
    })
    
    return {
        getAllPost,countUser,updateUser
    }
   })
   console.log(result)
}

interactiveTransaction()