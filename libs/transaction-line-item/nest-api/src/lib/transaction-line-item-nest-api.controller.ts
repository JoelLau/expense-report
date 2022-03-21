import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TransactionLineItem } from '@prisma/client';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

@Controller('transaction-line-item')
export class TransactionLineItemNestApiController {
  constructor(private service: TransactionLineItemNestApiService) {}

  @Get()
  async getTransactionLineItems(): Promise<{ data: TransactionLineItem[] }> {
    const data = await this.service.getTransactionLineItems();
    return { data };
  }

  @Get(':id')
  async getTransactionLineItem(
    @Param('id') id: string
  ): Promise<{ data: TransactionLineItem }> {
    const data = await this.service.getTransactionLineItem(id);
    if (!data) {
      throw new NotFoundException(
        `Could not find any transaction line items with id: ${id}`
      );
    }
    return { data };
  }
}
