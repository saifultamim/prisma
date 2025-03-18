module-55:
create:
create() : 
const result = await prisma.post.create({
        data:{
            title:"this is title3",
            content:"this is content3",
            authorName:"Shaiful Islam"
        }
    })


createMany(): 
 const result = await prisma.post.createMany({
        data:[
            {
                title:"this is title5",
                content:"this is content5",
                authorName:"Shaiful Islam"
            },
            {
                title:"this is title6",
                content:"this is content6",
                authorName:"Shaiful Islam"
            }
        ]
    })


=======================================================




find:
findMany() : 
 const getAllData = await prisma.post.findMany()
const getAllData = await prisma.post.findMany({
 select:{
        title:true,
        authorName:true
      }
})

findFirst() : 
 const getFirstData = await prisma.post.findFirst({
        where:{
            published:false
        }
    })


findFirstOrThrow() : 
const getFirstData = await prisma.post.findFirstOrThrow({
        where:{
            published:true
        }
    })



findUnique() : 
   const getUniqueData = await prisma.post.findUnique({
        where:{
            id:3
        }
    })


findUniqueOrThrow() : 
    const getUniqueData = await prisma.post.findUniqueOrThrow({
        where:{
            id:5
        },
 select:{
        title:true,
        authorName:true
      }
    })


=====================================================
update : 

update() : 
  const result = await prisma.post.update({
    where : {
        id:5
    },
    data:{
        title:'title',
        content:'content',
        published:true,
        authorName:'saiful tamim'
    }
    })



updateMany() : 
  const result = await prisma.post.updateMany({
    where : {
        published:true
    },
    data:{
        title:'title',
        content:'content',
        published:true,
        authorName:'saiful tamim'
    }
    })


=======================================================================

//when delete update then execute with unique .deleteMany,updateMany then execute not unique mandatory
delete:

delete() : 

const result = await prisma.post.delete({
    where:{
        id:4
    }
   })


deleteMany () : 
  const result = await prisma.post.deleteMany({
    where:{
        published:false
    }
   })

all delete : 
  const result = await prisma.post.deleteMany({ })

===============================================================================
upsert() : if this data exist then update otherwise data create
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


================================================================================

pagination:
   //offset pagination
    const offsetData = await prisma.post.findMany({
        skip:3,
        take:2
    })
    //cursor based pagination
    const cursorData = await prisma.post.findMany({
        skip:3,
        take:2,
        cursor:{
            id:15  //from count start this number 
        }
    })

orderBy:
  const sortedData = await prisma.post.findMany({
        orderBy:{
            title:'desc' /id:'asc'
        },
        skip:4,
        take:2,
        where:{
            published:true
        }
    })

module:56 :
include,relation variable category ,foreign id with create  :  
   const createPost = await prisma.post.create({
        data:{
            title : "this is title",
            content: "this is content",
            authorId:3,
            postCategory:{
                create:{
                    // category:{
                    //     connect:{
                    //         id:1
                    //     }
                    // }
                    categoryId:1
                }
            }
        },
        include:{
            postCategory:true,
        }
    })


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


//fluent api menas depend one table but show  data other table
    const userFind = await prisma.user.findUnique({
        where :{
            id:1
        },
    }).Post()


   const userFind = await prisma.user.findUnique({
        where :{
            id:1
        },
        include:{
            Post:true,
        }
    })

//
const postUsers = await prisma.user.findMany({
        include:{
            Post:{
               where:{
                published:true
               }
            },
        }
    })
    console.dir(postUsers,{depth:Infinity})


AND:
const andFiltering = await prisma.post.findMany({
        where:{
            AND:[
                {
                    title:{
                        contains:'title'
                    }
                },
                {
                    published:true
                }
            ]
        }
    })



OR:
 const orFiltering = await prisma.post.findMany({
        where:{
            OR:[
                {
                    title:{
                        contains:'title'
                    }
                },
                {
                    published:true
                }
            ]
        }
    })


NOT:
 const notFiltering = await prisma.post.findMany({
        where:{
          NOT:[
                {
                    title:{
                        contains:'this'
                    }
                }
            ]
        }
    })

startsWith : 
 const startsWith = await prisma.user.findMany({
    where:{
        email:{
            startsWith:"user1"
        }
    }
 })

endsWith:
 const endsWith = await prisma.user.findMany({
    where:{
        email:{
            endsWith:"gmail.com"
        }
    }
 })


equals:
 const equals = await prisma.user.findMany({
    where:{
        email:{
            equals:"user1@gmail.com"
        }
    }
 })



in : 
const userNameArray = ['user1','user2','user5']
 const userNamesByArray = await prisma.user.findMany({
    where:{
      username:{
        in:userNameArray
      }
    }
 })
 console.log(userNamesByArray)


 const inDepthData = await prisma.user.findUnique({
    where:{
        id:3
    },
    include:{
        Post:{
            include:{
                postCategory:{
                    include:{
                        category:true
                    }
                }
            }
        }
    }

 })




56.10

module:57 : 
aggregate:
aggregate will be execute the only Number
aggregate- _avg,_sum,_count(fields),_max,_min

 const aggregations = await prisma.user.aggregate({
        //_avg,_sum,_count(fields,use both number and string fields),_max,_min
        _count: {
          id: true,
        },
      })

await prisma.user.count() - counts total table data


groupBy:
groupBy() supports two levels of filtering: where and having.

   const groupBy = await prisma.post.groupBy({
        by:['published','authorId'],
        _count:{
            title:true
        },
       having:{
        published:true
       }
    })


batch / sequential transaction : 
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

batch()



interactive transaction : 
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

raw Query : 
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const rawQuery = async () => {
  const result = await prisma.$queryRaw`SELECT * FROM posts where true`
  console.log(result)
  //force fully data delete which is relation users table
//   await prisma.$queryRaw`TRUNCATE TABLE users CASCADE`
}

rawQuery()
========================================================


npx prisma generate - for only prisma client generate
npx prisma validate - for schema is right or wrong identify
npx prisma format - for schema formatting
npx prisma db pull --print - which schema push the db that schema pull the terminal
npx prisma db pull -  scehma.prisma file schema pull from the database
npx prisma db push - not prisma client generate but will be  migrate  
npx prisma - command 



module-58












