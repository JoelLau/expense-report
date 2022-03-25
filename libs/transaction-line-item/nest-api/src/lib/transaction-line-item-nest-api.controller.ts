import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TransactionLineItem } from '@expense-report/api-interfaces';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

@Controller('transaction-line-items')
export class TransactionLineItemNestApiController {
  constructor(private service: TransactionLineItemNestApiService) {}

  /**
   * TODO: perform validation
   */
  @Post()
  async createTransactionLineItems(
    @Body() data: TransactionLineItem[]
  ): Promise<{
    data: TransactionLineItem | TransactionLineItem[];
  }> {
    return {
      data: await this.service.createTransactionLineItems(data),
    };
  }

  @Get()
  async getTransactionLineItems(
    @Query('id') rawIds: string
  ): Promise<{ data: TransactionLineItem[] }> {
    const ids = rawIds
      ? (rawIds || '').split(',').map((rawId) => rawId.trim())
      : [];
    const data = await this.service.getTransactionLineItems(ids);
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

  @Patch()
  async updateTransactionLineItems(
    @Body() body: Prisma.TransactionLineItemCreateInput[]
  ) {
    const ids = (body || []).map((item, index) => {
      if (!item.id) {
        throw new BadRequestException({
          message: `Error on item ${index} - missing transaction line item id is ${item.id}`,
          data: { item },
        });
      }
      return item.id;
    });
    const before = await this.service.getTransactionLineItems(ids);
    const updates = await this.service.updateTransactionLineItems(body);
    const updatedItems = await this.service.getTransactionLineItems(ids);
    return { before, count: updates.length, data: updatedItems };
  }

  @Patch(':id')
  async updateTransactionLineItem(
    @Param('id') id: string,
    @Body() body: Prisma.TransactionLineItemCreateInput
  ) {
    if (!body.id) {
      body.id = id;
    }

    if (body.id !== id) {
      throw new BadRequestException({
        message: `id in URI (${id}) and id in request body (${body.id}) must match`,
        requestBody: body,
        uriId: id,
      });
    }
    const before = await this.service.getTransactionLineItem(id);
    const updates = await this.service.updateTransactionLineItems([body]);
    const updatedItems = await this.service.getTransactionLineItem(id);
    return { before, count: updates.length, data: updatedItems };
  }

  @Delete(':id')
  async deleteTransactionLineItem(@Param('id') id: string) {
    const modified = await this.service.getTransactionLineItem(id);
    const { count } = await this.service.deleteTransactionLineItems([id]);
    return { count, data: modified };
  }

  /**
   * @param rawIds comma separated list of ids
   */
  @Delete()
  async deleteTransactionLineItems(@Query('id') rawIds: string) {
    const ids = rawIds
      ? (rawIds || '').split(',').map((rawId) => rawId.trim())
      : [];
    const deleted = await this.service.getTransactionLineItems(ids);
    const { count } = await this.service.deleteTransactionLineItems(ids);
    return { count, data: deleted };
  }
}
