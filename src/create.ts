import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient()

const main = async() => {
    const createUser = await prisma.user.createMany({
        data:[
                { username: "user01", email: "user1@example.com", role: UserRole.User },
                { username: "user02", email: "user2@example.com", role: UserRole.User },
                { username: "user3", email: "user3@example.com", role: UserRole.User },
                { username: "user4", email: "user4@example.com", role: UserRole.User },
                { username: "user5", email: "user5@example.com", role: UserRole.Admin },
                { username: "user6", email: "user6@example.com", role: UserRole.User },
                { username: "user7", email: "user7@example.com", role: UserRole.User },
                { username: "user8", email: "user8@example.com", role: UserRole.User },
                { username: "user9", email: "user9@example.com", role: UserRole.User },
                { username: "user10", email: "user10@example.com", role: UserRole.User },
                { username: "user11", email: "user11@example.com", role: UserRole.Admin },
                { username: "user12", email: "user12@example.com", role: UserRole.User },
                { username: "user13", email: "user13@example.com", role: UserRole.User },
                { username: "user14", email: "user14@example.com", role: UserRole.User },
                { username: "user15", email: "user15@example.com", role: UserRole.User },
                { username: "user16", email: "user16@example.com", role: UserRole.User },
                { username: "user17", email: "user17@example.com", role: UserRole.User },
                { username: "user18", email: "user18@example.com", role: UserRole.Admin },
                { username: "user19", email: "user19@example.com", role: UserRole.User },
                { username: "user20", email: "user20@example.com", role: UserRole.User },
                { username: "user21", email: "user21@example.com", role: UserRole.User },
                { username: "user22", email: "user22@example.com", role: UserRole.User },
                { username: "user23", email: "user23@example.com", role: UserRole.User },
                { username: "user24", email: "user24@example.com", role: UserRole.Admin },
                { username: "user25", email: "user25@example.com", role: UserRole.User },
                { username: "user26", email: "user26@example.com", role: UserRole.User },
                { username: "user27", email: "user27@example.com", role: UserRole.User },
                { username: "user28", email: "user28@example.com", role: UserRole.User },
                { username: "user29", email: "user29@example.com", role: UserRole.Admin },
                { username: "user30", email: "user30@example.com", role: UserRole.User },
                { username: "user31", email: "user31@example.com", role: UserRole.User },
                { username: "user32", email: "user32@example.com", role: UserRole.User },
                { username: "user33", email: "user33@example.com", role: UserRole.Admin },
                { username: "user034", email: "user34@example.com", role: UserRole.User },
                { username: "user35", email: "user35@example.com", role: UserRole.User },
                { username: "user36", email: "user36@example.com", role: UserRole.User },
                { username: "user37", email: "user37@example.com", role: UserRole.User },
                { username: "user38", email: "user38@example.com", role: UserRole.Admin },
                { username: "user39", email: "user39@example.com", role: UserRole.User },
                { username: "user40", email: "user40@example.com", role: UserRole.User },
                { username: "user41", email: "user41@example.com", role: UserRole.User },
                { username: "user42", email: "user42@example.com", role: UserRole.User },
                { username: "user43", email: "user43@example.com", role: UserRole.Admin },
                { username: "user44", email: "user44@example.com", role: UserRole.User },
                { username: "user45", email: "user45@example.com", role: UserRole.User },
                { username: "user46", email: "user46@example.com", role: UserRole.User },
                { username: "user47", email: "user47@example.com", role: UserRole.User },
                { username: "user48", email: "user48@example.com", role: UserRole.Admin },
                { username: "user49", email: "user49@example.com", role: UserRole.User },
                { username: "user50", email: "user50@example.com", role: UserRole.User }
              ]
              
        
    })
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

    // const createPost = await prisma.post.create({
    //     data:{
    //         title : "this is title 5",
    //         content: "this is content 5",
    //         authorId:3,
    //         postCategory:{
    //             create:[
    //                 {categoryId:1},
    //                 {categoryId:3},
    //                 {categoryId:4},
    //             ]
    //         }
    //     },
    //     include:{
    //         postCategory:true,
    //     }
    // })
    // console.log(createPost)
 }
//    main()