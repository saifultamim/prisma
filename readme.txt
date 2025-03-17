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
56.4






