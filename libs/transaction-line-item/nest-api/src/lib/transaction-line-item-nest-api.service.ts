import { PrismaService } from '@expense-report/prisma';
import { Injectable } from '@nestjs/common';
import { TransactionLineItem } from '@prisma/client';

@Injectable()
export class TransactionLineItemNestApiService {
  constructor(private readonly prisma: PrismaService) {}

  getTransactionLineItems(): Promise<TransactionLineItem[] | null> {
    return this.prisma.transactionLineItem.findMany();
  }

  getTransactionLineItem(id: string): Promise<TransactionLineItem | null> {
    return this.prisma.transactionLineItem.findUnique({ where: { id } });
  }
}
