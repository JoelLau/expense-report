import { Test } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { ExpensesApiService } from './expenses-api.service';
import { SharedApiPrismaService } from '@expense-report/shared/api/prisma';
import { expenseInputs, expenses } from '@expense-report/expenses/shared';

describe(`ExpensesApiService'`, () => {
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
          create: jest.fn(),
          deleteMany: jest.fn(),
          findMany: jest.fn(),
          findUnique: jest.fn(),
          update: jest.fn(),
        },
      })
      .compile();

    service = module.get(ExpensesApiService);
    prisma = module.get(SharedApiPrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe(`given 'createExpenses()'`, () => {
    const mockData = expenseInputs;

    describe('when called be called with mockData', () => {
      beforeEach(async () => {
        await service.createExpenses(mockData);
      });

      it(`should be a transaction`, async () => {
        expect(prisma.$transaction).toHaveBeenCalled();
      });

      it(`should call prisma.expense.create (mockData.length) times`, async () => {
        expect(prisma.expense.create).toBeCalledTimes(mockData.length);
      });
    });
  });

  describe(`given 'getExpense()'`, () => {
    const mockId = 'cl1agau5o0000c80jnx9vmgq4';

    describe(`when called with mockId: ${mockId}`, () => {
      beforeEach(async () => {
        await service.getExpense(mockId);
      });

      it('should call prisma.expense.findUnique exactly once', async () => {
        expect(prisma.expense.findUnique).toBeCalledTimes(1);
      });
    });
  });

  describe(`given 'getExpenses()'`, () => {
    describe('when called with no ids', () => {
      beforeEach(async () => {
        await service.getExpenses();
      });

      it('should call prisma.expense.findMany exactly once', async () => {
        expect(prisma.expense.findMany).toBeCalledTimes(1);
      });

      it('should call prisma.expense.findMany with no arguments', async () => {
        expect(prisma.expense.findMany).toBeCalledWith();
      });
    });

    const mockIds = [
      'cl1agau5o0000c80jnx9vmgq4',
      'cl1agau5o0001c80jh76dw1wq',
      'cl1agau5o0002c80jtem4aa74',
    ];

    describe('when called with multiple ids', () => {
      beforeEach(async () => {
        await service.getExpenses(mockIds);
      });

      it('should call prisma.expense.findMany exactly once', async () => {
        expect(prisma.expense.findMany).toBeCalledTimes(1);
      });
    });
  });

  describe(`given 'updateExpenses()'`, () => {
    const validUpdates = expenses;

    describe('when called with valid data', () => {
      beforeEach(async () => {
        await service.updateExpenses(validUpdates);
      });

      it('should call prisma.transaction$ exactly once', async () => {
        expect(prisma.$transaction).toBeCalledTimes(1);
      });

      it('should call prisma.transaction$ as many times as arguments passed', async () => {
        expect(prisma.expense.update).toBeCalledTimes(validUpdates.length);
      });
    });

    const invalidUpdates = expenseInputs;

    describe('when called with invalid data', () => {
      it('should throw', async () => {
        expect.assertions(1);
        try {
          await service.updateExpenses(invalidUpdates);
        } catch (error) {
          expect(error).toBeInstanceOf(BadRequestException);
        }
      });
    });
  });

  describe(`given 'deleteExpenses()'`, () => {
    const mockIds = [
      'cl1agau5o0000c80jnx9vmgq4',
      'cl1agau5o0001c80jh76dw1wq',
      'cl1agau5o0002c80jtem4aa74',
    ];

    describe('when called', () => {
      beforeEach(async () => {
        await service.deleteExpenses(mockIds);
      });

      it('should call prisma.expense.findMany exactly once', async () => {
        expect(prisma.expense.deleteMany).toBeCalledTimes(1);
      });
    });
  });
});
