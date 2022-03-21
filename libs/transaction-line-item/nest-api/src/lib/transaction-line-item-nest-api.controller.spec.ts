import { PrismaService } from '@expense-report/prisma';
import { Test } from '@nestjs/testing';
import { TransactionLineItemNestApiController } from './transaction-line-item-nest-api.controller';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

describe('TransactionLineItemNestApiController', () => {
  let controller: TransactionLineItemNestApiController;
  let service: TransactionLineItemNestApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransactionLineItemNestApiService, PrismaService],
      controllers: [TransactionLineItemNestApiController],
    }).compile();

    controller = module.get(TransactionLineItemNestApiController);
    service = module.get(TransactionLineItemNestApiService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  describe('getTransactionLineItems', () => {
    it('should call service.getTransactionLineItems', () => {
      const mockGet = jest.spyOn(service, 'getTransactionLineItems');
      controller.getTransactionLineItems();
      expect(mockGet).toHaveBeenCalled();
    });
  });

  describe('getTransactionLineItem', () => {
    it('should call service.getTransactionLineItem', () => {
      const mockId = '1';
      const mockGet = jest.spyOn(service, 'getTransactionLineItem');

      controller.getTransactionLineItem(mockId);
      expect(mockGet).toHaveBeenCalledWith(mockId);
    });
  });
});
