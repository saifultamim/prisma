import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const rawQuery = async () => {
  const result = await prisma.$queryRaw`SELECT * FROM posts where true`
  console.log(result)
  //force fully data delete  which is relation users table
//   await prisma.$queryRaw`TRUNCATE TABLE users CASCADE`
}

rawQuery()