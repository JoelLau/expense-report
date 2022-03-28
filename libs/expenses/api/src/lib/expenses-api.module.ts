import { Module } from '@nestjs/common';
import { ExpensesApiController } from './expenses-api.controller';
import { ExpensesApiService } from './expenses-api.service';
import { SharedApiPrismaModule } from '@expense-report/shared/api/prisma';

@Module({
  imports: [SharedApiPrismaModule],
  controllers: [ExpensesApiController],
  providers: [ExpensesApiService],
  exports: [ExpensesApiService, SharedApiPrismaModule],
})
export class ExpensesApiModule {}
