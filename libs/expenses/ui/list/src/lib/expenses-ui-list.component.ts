import { Component, Input } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { gridOptions } from './grid-options';
import { Expense } from '@expense-report/expenses/shared';

@Component({
  selector: 'expense-report-expenses-ui-list',
  templateUrl: './expenses-ui-list.component.html',
})
export class ExpensesUiListComponent {
  @Input() rowData: Expense[] | null = [];
  gridOptions: GridOptions = gridOptions;
}
