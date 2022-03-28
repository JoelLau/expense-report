import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const expenses: Prisma.ExpenseCreateInput[] = [
  {
    name: 'SMRT ASDF',
    date: new Date(),
    amount: 1_500_000,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
  {
    name: 'Macdonalds',
    date: new Date(),
    amount: 50000,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
  {
    name: 'SMRT ASDF',
    date: new Date(),
    amount: 500,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
];

async function initializeExpenses() {
  await Promise.all(
    expenses.map((expenses) => prisma.expense.create({ data: expenses }))
  );
}

initializeExpenses()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
