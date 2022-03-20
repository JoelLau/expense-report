import { PrismaService } from '@expense-report/prisma';
import { Injectable } from '@nestjs/common';
import { TransactionLineItem } from '@prisma/client';

@Injectable()
export class TransactionLineItemNestApiService {
  constructor(private readonly prisma: PrismaService) {}

  getTransactionLineItems(): Promise<TransactionLineItem[]> {
    return this.prisma.transactionLineItem.findMany();
  }
}
