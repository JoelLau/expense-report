import { Test } from '@nestjs/testing';
import { ExpensesApiController } from './expenses-api.controller';
import { ExpensesApiService } from './expenses-api.service';

describe('ExpensesApiController', () => {
  let controller: ExpensesApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExpensesApiService],
      controllers: [ExpensesApiController],
    }).compile();

    controller = module.get(ExpensesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
