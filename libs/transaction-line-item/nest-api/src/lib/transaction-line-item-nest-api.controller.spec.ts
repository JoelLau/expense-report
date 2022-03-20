import { PrismaService } from '@expense-report/prisma';
import { Test } from '@nestjs/testing';
import { TransactionLineItemNestApiController } from './transaction-line-item-nest-api.controller';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

describe('TransactionLineItemNestApiController', () => {
  let controller: TransactionLineItemNestApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransactionLineItemNestApiService, PrismaService],
      controllers: [TransactionLineItemNestApiController],
    }).compile();

    controller = module.get(TransactionLineItemNestApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  describe('getTransactionLineItems()', () => {
    it('should call service.getTransactionLineItems()', () => {
      controller.getTransactionLineItems();
    });
  });
});
