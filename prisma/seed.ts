import { PrismaClient, TransactionLineItem } from '@prisma/client';

const prisma = new PrismaClient();

const transactionLineItems: TransactionLineItem[] = [
  {
    id: '1',
    name: 'SMRT ASDF',
    date: new Date(),
    amount: 1_500_000,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
  {
    id: '2',
    name: 'Macdonalds',
    date: new Date(),
    amount: 50000,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
  {
    id: '3',
    name: 'SMRT ASDF',
    date: new Date(),
    amount: 500,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
];

async function initializeTransactionLineItems() {
  await Promise.all(
    transactionLineItems.map((transactionLineItem) =>
      prisma.transactionLineItem.create({ data: transactionLineItem })
    )
  );
}

initializeTransactionLineItems()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
