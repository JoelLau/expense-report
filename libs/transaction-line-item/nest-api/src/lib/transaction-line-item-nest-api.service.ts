import { PrismaService } from '@expense-report/prisma';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, TransactionLineItem } from '@prisma/client';

@Injectable()
export class TransactionLineItemNestApiService {
  constructor(private readonly prisma: PrismaService) {}

  createTransactionLineItems(
    transactionLineItems: Prisma.TransactionLineItemCreateInput[] = []
  ) {
    return this.prisma.$transaction(
      transactionLineItems.map((transactionLineItem) =>
        this.prisma.transactionLineItem.create({ data: transactionLineItem })
      )
    );
  }

  getTransactionLineItems(
    ids: string[] = []
  ): Promise<TransactionLineItem[] | null> {
    return ids.length <= 0
      ? this.prisma.transactionLineItem.findMany()
      : this.prisma.transactionLineItem.findMany({
          where: { id: { in: ids } },
        });
  }

  getTransactionLineItem(id: string): Promise<TransactionLineItem | null> {
    return this.prisma.transactionLineItem.findUnique({ where: { id } });
  }

  updateTransactionLineItems(
    transactionLineItems: Prisma.TransactionLineItemCreateInput[] = []
  ) {
    return this.prisma.$transaction(
      transactionLineItems.map((transactionLineItem, index) => {
        if (!transactionLineItem.id) {
          throw new BadRequestException({
            message: `Error on item ${index} - missing transaction line item id is ${transactionLineItem.id}`,
            data: { transactionLineItems },
          });
        }

        return this.prisma.transactionLineItem.update({
          where: { id: transactionLineItem.id },
          data: transactionLineItem,
        });
      })
    );
  }

  deleteTransactionLineItems(ids: string[]): Promise<Prisma.BatchPayload> {
    return this.prisma.transactionLineItem.deleteMany({
      where: { id: { in: ids } },
    });
  }
}
