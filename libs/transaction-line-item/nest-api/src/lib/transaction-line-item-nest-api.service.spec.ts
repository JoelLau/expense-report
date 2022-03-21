import { PrismaService } from '@expense-report/prisma';
import { Test } from '@nestjs/testing';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

describe('TransactionLineItemNestApiService', () => {
  let service: TransactionLineItemNestApiService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransactionLineItemNestApiService, PrismaService],
    }).compile();

    service = module.get(TransactionLineItemNestApiService);
    prisma = module.get(PrismaService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('getTransactionLineItems()', () => {
    it('should call service.getTransactionLineItems()', async () => {
      const findManySpy = jest.spyOn(prisma.transactionLineItem, 'findMany');
      await service.getTransactionLineItems();
      expect(findManySpy).toHaveBeenCalled();
    });
  });

  describe('getTransactionLineItem()', () => {
    it('should call service.getTransactionLineItem()', async () => {
      const findUniqueSpy = jest.spyOn(
        prisma.transactionLineItem,
        'findUnique'
      );
      await service.getTransactionLineItem('5');
      expect(findUniqueSpy).toHaveBeenCalled();
    });
  });
});
