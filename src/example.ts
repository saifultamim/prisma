// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()

// const main = async() => {
//   const res = await prisma.user.findMany({})
//   console.log('data : ',res)
// }
// main()

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPaginatedData = async (page: number = 1, pageSize: number = 10, searchTerm: string = "") => {
  const offset = (page - 1) * pageSize;

  let where = {};
  if (searchTerm) {
    // const searchFields = ["username","email"]; 
    const searchFields = ["username","email","role"]; 
    where = {
      OR: searchFields.map((field) => ({
        [field]: {
          contains: searchTerm.toLowerCase(),
        },
      })),
    };
  
  }

  const [data, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip: offset,
      take: pageSize,
      orderBy: {
        id: "asc", 
      },
    }),
    prisma.user.count({
      where,
    }),
  ]);

  const totalPages = Math.ceil(total / pageSize);

  return {
    meta: {
      total,
      page,
      totalPages,
      pageSize,
    },
    data,
  };
};

const main = async () => {
  const page = 2; 
  const pageSize = 10; 
  const searchTerm = ""; 

  const paginatedData = await getPaginatedData(page, pageSize, searchTerm);
  console.log("Paginated data:", paginatedData);
};

main();





