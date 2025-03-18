import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient()

const main = async() => {
    // const createUser = await prisma.user.create({
    //     data:{
    //         username:'user2',
    //         email:'user2@gmail.com',
    //         role:UserRole.User
    //     }
    // })

    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio:'this is bio...',
    //         userId:3
    //     }
    // })
      
    // const createCategory = await prisma.category.create({
    //     data:{
    //         name:'software engineering'
    //     }
    // })

    const createPost = await prisma.post.create({
        data:{
            title : "this is title 5",
            content: "this is content 5",
            authorId:3,
            postCategory:{
                create:[
                    {categoryId:1},
                    {categoryId:3},
                    {categoryId:4},
                ]
            }
        },
        include:{
            postCategory:true,
        }
    })
    console.log(createPost)
 }
//   main()