import { Test } from '@nestjs/testing';
import { ExpensesApiController } from './expenses-api.controller';
import { ExpensesApiService } from './expenses-api.service';
import { expenseInputs, expenses } from '@expense-report/expenses/shared';

describe('ExpensesApiController', () => {
  let controller: ExpensesApiController;
  let service: ExpensesApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExpensesApiService],
      controllers: [ExpensesApiController],
    })
      .overrideProvider(ExpensesApiService)
      .useValue({
        createExpenses: jest.fn(),
        getExpense: jest.fn(),
        getExpenses: jest.fn(),
        updateExpenses: jest.fn(),
        deleteExpense: jest.fn(),
        deleteExpenses: jest.fn(),
      })
      .compile();

    controller = module.get(ExpensesApiController);
    service = module.get(ExpensesApiService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  describe(`given 'createExpenses()'`, () => {
    describe(`when called`, () => {
      it(`should call service.createExpense() exactly once`, async () => {
        await controller.createExpenses(expenseInputs);
        expect(service.createExpenses).toBeCalledTimes(1);
      });
    });
  });

  describe(`given 'getExpense()'`, () => {
    const mockId = '1';

    describe(`when called with an id: ${mockId}`, () => {
      beforeEach(async () => {
        jest.spyOn(service, 'getExpense').mockReturnValueOnce(
          new Promise((resolve, _) => {
            resolve(expenses[0]);
          })
        );
        await controller.getExpense(mockId);
      });

      it(`should call service.getExpense() exactly once`, async () => {
        expect(service.getExpense).toBeCalledTimes(1);
      });

      it(`should call service.getExpense() with same mock id: ${mockId}`, async () => {
        expect(service.getExpense).toBeCalledWith(mockId);
      });
    });
  });

  describe(`given 'getExpenses()'`, () => {
    const mockIds = [
      'cl1agau5o0000c80jnx9vmgq4',
      'cl1agau5o0001c80jh76dw1wq',
      'cl1agau5o0002c80jtem4aa74',
    ];
    const mockCommaSeparatedIds = mockIds.join(',');

    describe(`when called with comma separated ids: ${mockCommaSeparatedIds}`, () => {
      beforeEach(async () => {
        await controller.getExpenses(mockCommaSeparatedIds);
      });

      it('should call service.getExpenses() exactly once', () => {
        expect(service.getExpenses).toBeCalledTimes(1);
      });

      it('should call service.getExpenses() exactly once', () => {
        expect(service.getExpenses).toBeCalledWith(mockIds);
      });
    });
  });

  describe(`given 'updateExpense()'`, () => {
    describe('when called with id in query, and body without id', () => {
      const id = 'cl1agau5o0000c80jnx9vmgq4';
      const body = expenseInputs[0];

      beforeEach(async () => {
        jest.spyOn(service, 'getExpense').mockReturnValueOnce(
          new Promise((resolve, _) => {
            resolve(expenses[0]);
          })
        );
        jest.spyOn(service, 'updateExpenses').mockReturnValueOnce(
          new Promise((resolve, _) => {
            resolve(expenses);
          })
        );
        await controller.updateExpense(id, body);
      });

      it('should call service.updateExpenses() exactly once', () => {
        expect(service.updateExpenses).toBeCalledTimes(1);
      });

      it('should call service.updateExpenses() with a body that with id', () => {
        expect(service.updateExpenses).toBeCalledWith([{ id, ...body }]);
      });
    });
  });

  describe(`given 'updateExpenses()'`, () => {
    describe('when called', () => {
      xit('should call service.updateExpenses() exactly once', () => {
        expect(service.updateExpenses).toBeCalledTimes(1);
      });
    });
  });

  describe(`given 'deleteExpense()'`, () => {
    describe('when called', () => {
      xit('should call service.deleteExpense() exactly once', () => {
        expect(service.deleteExpenses).toBeCalledTimes(1);
      });
    });
  });

  describe(`given 'deleteExpenses()'`, () => {
    describe('when called', () => {
      xit('should call service.deleteExpenses() exactly once', () => {
        expect(service.deleteExpenses).toBeCalledTimes(1);
      });
    });
  });
});
