import { ChangeDetectorRef, Component, OnChanges } from '@angular/core';
import {
  BehaviorSubject,
  delay,
  finalize,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { ExpensesDataAccessService } from '@expense-report/expenses/data-access';
import { Expense } from '@expense-report/expenses/shared';

@Component({
  selector: 'expense-report-expenses-ui-page',
  templateUrl: './expenses-ui-page.component.html',
})
export class ExpensesUiPageComponent {
  isFetchingExpenses = false;
  triggerFetchExpenses$ = new BehaviorSubject<Date>(new Date());
  expenses$: Observable<Expense[]> = this.triggerFetchExpenses$.pipe(
    tap(() => {
      this.isFetchingExpenses = true;
      this.changeDetector.detectChanges();
    }),
    switchMap(() => this.service.getExpenses()),
    map(({ data }) => data),
    tap(() => {
      this.isFetchingExpenses = false;
      this.changeDetector.detectChanges();
    })
  );

  constructor(
    private service: ExpensesDataAccessService,
    private changeDetector: ChangeDetectorRef
  ) {}

  refreshButtonClick() {
    this.triggerFetchExpenses$.next(new Date());
  }
}
