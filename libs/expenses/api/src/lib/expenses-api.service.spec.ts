import { Test } from '@nestjs/testing';
import { ExpensesApiService } from './expenses-api.service';

describe('ExpensesApiService', () => {
  let service: ExpensesApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExpensesApiService],
    }).compile();

    service = module.get(ExpensesApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
