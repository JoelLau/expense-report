import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesApiModule } from '@expense-report/expenses/api';

@Module({
  imports: [ExpensesApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
