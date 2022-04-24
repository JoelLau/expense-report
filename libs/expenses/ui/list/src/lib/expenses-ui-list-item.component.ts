import { Component, Input } from '@angular/core';
import { Expense } from '@prisma/client';

@Component({
  selector: 'expense-report-expenses-ui-list-item',
  templateUrl: './expenses-ui-list-item.component.html',
})
export class ExpensesUiListItemComponent {
  @Input() expense?: Expense;
}
