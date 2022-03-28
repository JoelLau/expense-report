import { ExpenseCreateInput } from './expense';

export const createExpenseInputs: ExpenseCreateInput[] = [
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
