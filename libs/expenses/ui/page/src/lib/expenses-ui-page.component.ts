import { Component } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Expense } from '@expense-report/expenses/shared';
import { ExpensesDataAccessService } from '@expense-report/expenses/data-access';

@Component({
  selector: 'expense-report-expenses-ui-page',
  templateUrl: './expenses-ui-page.component.html',
})
export class ExpensesUiPageComponent {
  triggerFetchExpenses$ = new BehaviorSubject<Date>(new Date());
  expenses$: Observable<Expense[]> = this.triggerFetchExpenses$.pipe(
    switchMap(() => this.service.getExpenses()),
    map(({ data }) => data)
  );

  constructor(private service: ExpensesDataAccessService) {}

  refreshButtonClick() {
    this.triggerFetchExpenses$.next(new Date());
  }
}
