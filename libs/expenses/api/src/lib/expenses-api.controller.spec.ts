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
        getExpenses: jest.fn(),
        getExpense: jest.fn(),
        createExpenses: jest.fn(),
        createExpense: jest.fn(),
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

  describe(`given 'getExpenses'`, () => {
    it('should call service.getExpenses', async () => {
      await controller.getExpenses(expenses[0].id);
      expect(service.getExpenses).toHaveBeenCalled();
    });
  });
});
