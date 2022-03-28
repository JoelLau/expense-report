import { Component } from '@angular/core';
import { ExpensesDataAccessService } from '@expense-report/expenses/data-access';

@Component({
  selector: 'expense-report-expenses-ui-page',
  templateUrl: './expenses-ui-page.component.html',
})
export class ExpensesUiPageComponent {
  expenses$ = this.service.getExpenses();
  constructor(private service: ExpensesDataAccessService) {}
}
