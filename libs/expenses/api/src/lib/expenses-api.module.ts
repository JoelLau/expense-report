import { Module } from '@nestjs/common';
import { ExpensesApiController } from './expenses-api.controller';
import { ExpensesApiService } from './expenses-api.service';

@Module({
  controllers: [ExpensesApiController],
  providers: [ExpensesApiService],
  exports: [ExpensesApiService],
})
export class ExpensesApiModule {}
