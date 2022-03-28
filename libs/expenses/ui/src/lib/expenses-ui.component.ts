import { Component } from '@angular/core';
import { ExpensesDataAccessService } from '@expense-report/expenses/data-access';

@Component({
  selector: 'expense-report-expenses-ui',
  templateUrl: './expenses-ui.component.html',
})
export class ExpensesUiComponent {
  expenses$ = this.service.getExpenses();
  constructor(private service: ExpensesDataAccessService) {}
}
