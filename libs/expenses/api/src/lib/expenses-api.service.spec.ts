import { Test } from '@nestjs/testing';
import { ExpensesApiService } from './expenses-api.service';
import { SharedApiPrismaService } from '@expense-report/shared/api/prisma';
import { expenseInputs } from '@expense-report/expenses/shared';

describe('ExpensesApiService', () => {
  let service: ExpensesApiService;
  let prisma: SharedApiPrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExpensesApiService, SharedApiPrismaService],
    })
      .overrideProvider(SharedApiPrismaService)
      .useValue({
        $transaction: jest.fn(),
        expense: {
          findMany: jest.fn(),
          findUnique: jest.fn(),
          create: jest.fn(),
        },
      })
      .compile();

    service = module.get(ExpensesApiService);
    prisma = module.get(SharedApiPrismaService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('getExpenses', () => {
    it('should call prisma.expense.findMany', async () => {
      await service.getExpenses();
      expect(prisma.expense.findMany).toHaveBeenCalled();
    });
  });

  describe('getExpense', () => {
    it('should call prisma.expense.findUnique', async () => {
      await service.getExpense('5');
      expect(prisma.expense.findUnique).toHaveBeenCalled();
    });
  });

  describe('createExpenses', () => {
    it(`should call prisma.expense.create`, async () => {
      await service.createExpenses(expenseInputs);
      expect(prisma.expense.create).toHaveBeenCalledTimes(expenseInputs.length);
    });

    it(`should call prisma.$transaction`, async () => {
      await service.createExpenses(expenseInputs);
      expect(prisma.$transaction).toHaveBeenCalled();
    });
  });
});
