import { PrismaModule } from '@expense-report/prisma';
import { Module } from '@nestjs/common';
import { TransactionLineItemNestApiController } from './transaction-line-item-nest-api.controller';
import { TransactionLineItemNestApiService } from './transaction-line-item-nest-api.service';

@Module({
  imports: [PrismaModule],
  controllers: [TransactionLineItemNestApiController],
  providers: [TransactionLineItemNestApiService],
  exports: [TransactionLineItemNestApiService, PrismaModule],
})
export class TransactionLineItemNestApiModule {}
