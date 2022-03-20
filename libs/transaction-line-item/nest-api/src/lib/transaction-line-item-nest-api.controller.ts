import { Controller, Get } from '@nestjs/common';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

@Controller('transaction-line-item')
export class TransactionLineItemNestApiController {
  constructor(private service: TransactionLineItemNestApiService) {}

  @Get()
  getTransactionLineItems() {
    return this.service.getTransactionLineItems();
  }
}
