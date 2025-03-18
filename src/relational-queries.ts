import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async() => {
    const aggregations = await prisma.user.aggregate({
        _count: {
          id: true,
        },
      })
console.log(aggregations,await prisma.user.count())      
}
main() 