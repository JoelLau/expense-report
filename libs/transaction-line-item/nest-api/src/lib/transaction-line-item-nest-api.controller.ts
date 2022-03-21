import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TransactionLineItem } from '@prisma/client';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

@Controller('transaction-line-item')
export class TransactionLineItemNestApiController {
  constructor(private service: TransactionLineItemNestApiService) {}

  /**
   * TODO: perform validation
   * NOTE: consider only providing array version
   */
  @Post()
  async createTransactionLineItems(
    @Body() data: TransactionLineItem | TransactionLineItem[]
  ): Promise<{
    data: TransactionLineItem | TransactionLineItem[];
  }> {
    return {
      data: Array.isArray(data)
        ? await this.service.createTransactionLineItems(data)
        : await this.service.createTransactionLineItem(data),
    };
  }

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

  @Patch(':id')
  async updateTransactionLineItem(
    @Param('id') id: string,
    @Body() body: Partial<TransactionLineItem>
  ) {
    const existingItem = await this.service.getTransactionLineItem(id);
    if (!existingItem) {
      throw new NotFoundException(
        `Could not find any transaction line items with id: ${id}`
      );
    }

    const updatedItem = Object.assign(existingItem, body);
    return { data: updatedItem };
  }
}
