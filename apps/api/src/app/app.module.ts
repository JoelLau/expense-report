import { TransactionLineItemNestApiModule } from '@expense-report/transaction-line-item/nest-api';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TransactionLineItemNestApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
