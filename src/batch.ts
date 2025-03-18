import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient()

const createUser = prisma.user.create({
    data:{
        username:'fahim',
        email:'fahil34@gmail.com',
        role:UserRole.User
    }
})
const updateUser = prisma.user.update({
    where:{
        id:1
    },
    data:{
        username:'ahmed'
    }
})

const batch = async () => {
const [createData,updateData] = await prisma.$transaction([
    createUser,
    updateUser
])
console.log(createData,updateData)
}

// batch()