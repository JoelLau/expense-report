import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Expense, ExpenseCreateInput } from '@expense-report/expenses/shared';
import { SharedApiPrismaService } from '@expense-report/shared/api/prisma';

@Injectable()
export class ExpensesApiService {
  constructor(private readonly prisma: SharedApiPrismaService) {}

  createExpenses(expense: ExpenseCreateInput[] = []) {
    return this.prisma.$transaction(
      expense.map((expense) => this.prisma.expense.create({ data: expense }))
    );
  }

  getExpense(id: string): Promise<Expense | null> {
    return this.prisma.expense.findUnique({ where: { id } });
  }

  getExpenses(ids: string[] = []): Promise<Expense[] | null> {
    return ids.length <= 0
      ? this.prisma.expense.findMany()
      : this.prisma.expense.findMany({
          where: { id: { in: ids } },
        });
  }

  updateExpenses(expense: Prisma.ExpenseCreateInput[] = []) {
    return this.prisma.$transaction(
      expense.map((expense, index) => {
        if (!expense.id) {
          throw new BadRequestException({
            message: `Error on item ${index} - missing transaction line item id is ${expense.id}`,
            data: { expense },
          });
        }

        return this.prisma.expense.update({
          where: { id: expense.id },
          data: expense,
        });
      })
    );
  }

  deleteExpenses(ids: string[]): Promise<Prisma.BatchPayload> {
    return this.prisma.expense.deleteMany({
      where: { id: { in: ids } },
    });
  }
}
