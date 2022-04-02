import { Prisma } from '@prisma/client';

export { Expense } from '@prisma/client';
export const EXPENSES_API_ROUTE = 'expenses';
export type ExpenseCreateInput = Prisma.ExpenseCreateInput;

export const AMOUNT_PRECISION = 100;
