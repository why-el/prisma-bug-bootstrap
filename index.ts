import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: `${Math.random().toString(36).substring(7)}@prisma.io`,
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });

  await prisma.post.deleteMany({ where: { id: { notIn: [] } } });

  console.log("DIVIDER ---------------------------------------------DIVIDER");

  const allUsersAgain = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsersAgain, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
