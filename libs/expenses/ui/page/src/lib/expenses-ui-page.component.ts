import { ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { ExpensesDataAccessService } from '@expense-report/expenses/data-access';
import { Expense } from '@expense-report/expenses/shared';

@Component({
  selector: 'expense-report-expenses-ui-page',
  templateUrl: './expenses-ui-page.component.html',
  // styles: [
  //   `
  //     :ng-host {
  //       background-color: #2c539e;
  //       @include filter-gradient(#2c539e, #ffffff, vertical);
  //       @include background-image(
  //         linear-gradient(top, #2c539e 50%, #ffffff 50%)
  //       );
  //     }
  //   `,
  // ],
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
