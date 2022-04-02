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

  describe(`given 'createExpenses'`, () => {
    describe(`when receiving multiple expenses`, () => {
      it(`should call service.createExpense once`, async () => {
        await controller.createExpenses(expenseInputs);
        expect(service.createExpenses).toHaveBeenCalled();
      });
    });
  });

  describe('getExpenses', () => {
    it('should call service.getExpenses', async () => {
      await controller.getExpenses(expenses[0].id);
      expect(service.getExpenses).toHaveBeenCalled();
    });
  });

  describe('getExpense', () => {
    it('should call service.getExpense', async () => {
      const mockId = '1';

      jest.spyOn(service, 'getExpense').mockReturnValueOnce(
        new Promise((resolve, _) => {
          resolve(expenses[0]);
        })
      );
      await controller.getExpense(mockId);
      expect(service.getExpense).toHaveBeenCalledWith(mockId);
    });
  });
});
