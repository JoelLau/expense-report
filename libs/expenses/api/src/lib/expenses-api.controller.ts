import { Controller } from '@nestjs/common';
import { ExpensesApiService } from './expenses-api.service';

@Controller('expenses-api')
export class ExpensesApiController {
  constructor(private expensesApiService: ExpensesApiService) {}
}
