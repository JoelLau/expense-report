import { PrismaService } from '@expense-report/prisma';
import { Test } from '@nestjs/testing';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

const MOCK_TRANSACTION_LINE_ITEMS = [
  {
    name: 'SMRT ASDF',
    date: new Date(),
    amount: 1_500_000,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
  {
    name: 'Macdonalds',
    date: new Date(),
    amount: 50000,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
  {
    name: 'SMRT ASDF',
    date: new Date(),
    amount: 500,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
];

describe('TransactionLineItemNestApiService', () => {
  let service: TransactionLineItemNestApiService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransactionLineItemNestApiService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue({
        $transaction: jest.fn(),
        transactionLineItem: {
          findMany: jest.fn(),
          findUnique: jest.fn(),
          create: jest.fn(),
        },
      })
      .compile();

    service = module.get(TransactionLineItemNestApiService);
    prisma = module.get(PrismaService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('getTransactionLineItems', () => {
    it('should call prisma.transactionLineItem.findMany', async () => {
      await service.getTransactionLineItems();
      expect(prisma.transactionLineItem.findMany).toHaveBeenCalled();
    });
  });

  describe('getTransactionLineItem', () => {
    it('should call prisma.transactionLineItem.findUnique', async () => {
      await service.getTransactionLineItem('5');
      expect(prisma.transactionLineItem.findUnique).toHaveBeenCalled();
    });
  });

  describe('createTransactionLineItems', () => {
    it(`should call prisma.transactionLineItem.create`, async () => {
      await service.createTransactionLineItems(MOCK_TRANSACTION_LINE_ITEMS);
      expect(prisma.transactionLineItem.create).toHaveBeenCalledTimes(
        MOCK_TRANSACTION_LINE_ITEMS.length
      );
    });

    it(`should call prisma.$transaction`, async () => {
      await service.createTransactionLineItems(MOCK_TRANSACTION_LINE_ITEMS);
      expect(prisma.$transaction).toHaveBeenCalled();
    });
  });

  describe('createTransactionLineItem', () => {
    it(`should call prisma.transactionLineItem.create`, async () => {
      await service.createTransactionLineItem(MOCK_TRANSACTION_LINE_ITEMS[0]);
      expect(prisma.transactionLineItem.create).toHaveBeenCalledTimes(1);
    });
  });
});
