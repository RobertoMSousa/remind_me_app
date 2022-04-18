import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.collection.deleteMany();
  await prisma.user.deleteMany();
  const collection1 = await prisma.collection.create({
    data: {
      name: 'Sample Collection 1',
      launchDate: new Date(),
    },
  });
  const collection2 = await prisma.collection.create({
    data: {
      name: 'Sample Collection 2',
      launchDate: new Date('2020-01-01T00:00:00.000Z'),
    },
  });
  const collection3 = await prisma.collection.create({
    data: {
      name: 'Sample Collection 3',
      launchDate: null,
    },
  });
  const collection4 = await prisma.collection.create({
    data: {
      name: 'Sample Collection 4',
      launchDate: null,
    },
  });
  const collection5 = await prisma.collection.create({
    data: {
      name: 'Sample Collection 5',
      launchDate: new Date('2022-10-01T00:00:00.000Z'),
    },
  });
  const collection6 = await prisma.collection.create({
    data: {
      name: 'Sample Collection 6',
      launchDate: null,
    },
  });
  const collection7 = await prisma.collection.create({
    data: {
      name: 'Sample Collection 7',
      launchDate: new Date('2022-10-01T00:00:00.000Z'),
    },
  });

  console.log({
    collection1,
    collection2,
    collection3,
    collection4,
    collection5,
    collection6,
    collection7,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
