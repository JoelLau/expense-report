import { Test } from '@nestjs/testing';
import { TransactionLineItemNestApiController } from './transaction-line-item-nest-api.controller';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

const MOCK_TRANSACTION_LINE_ITEMS = [
  {
    id: '11',
    name: 'SMRT ASDF',
    date: new Date(),
    amount: 1_500_000,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
  {
    id: '12',
    name: 'Macdonalds',
    date: new Date(),
    amount: 50000,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
  {
    id: '13',
    name: 'SMRT ASDF',
    date: new Date(),
    amount: 500,
    category: 'transport',
    description: 'MRT ride to clementi',
  },
];

describe('TransactionLineItemNestApiController', () => {
  let controller: TransactionLineItemNestApiController;
  let service: TransactionLineItemNestApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransactionLineItemNestApiService],
      controllers: [TransactionLineItemNestApiController],
    })
      .overrideProvider(TransactionLineItemNestApiService)
      .useValue({
        getTransactionLineItems: jest.fn(),
        getTransactionLineItem: jest.fn(),
        createTransactionLineItems: jest.fn(),
        createTransactionLineItem: jest.fn(),
      })
      .compile();

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
    it('should call service.getTransactionLineItems', async () => {
      await controller.getTransactionLineItems();
      expect(service.getTransactionLineItems).toHaveBeenCalled();
    });
  });

  describe('getTransactionLineItem', () => {
    it('should call service.getTransactionLineItem', async () => {
      const mockId = '1';

      jest.spyOn(service, 'getTransactionLineItem').mockReturnValueOnce(
        new Promise((resolve, _) => {
          resolve(MOCK_TRANSACTION_LINE_ITEMS[0]);
        })
      );
      await controller.getTransactionLineItem(mockId);
      expect(service.getTransactionLineItem).toHaveBeenCalledWith(mockId);
    });
  });

  describe('createTransactionLineItems', () => {
    describe('given ONE transaction line item', () => {
      it('should call service.createTransactionLineItems', async () => {
        await controller.createTransactionLineItems(
          MOCK_TRANSACTION_LINE_ITEMS
        );
        expect(service.createTransactionLineItems).toHaveBeenCalled();
      });
    });
    describe('given MULTIPLE transaction line items', () => {
      it('should call service.createTransactionLineItem', async () => {
        await controller.createTransactionLineItems(
          MOCK_TRANSACTION_LINE_ITEMS[0]
        );
        expect(service.createTransactionLineItem).toHaveBeenCalled();
      });
    });
  });
});
