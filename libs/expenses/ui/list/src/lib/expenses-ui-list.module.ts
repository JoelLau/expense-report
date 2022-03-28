import { NgModule } from '@angular/core';
import { ExpensesUiListComponent } from './expenses-ui-list.component';
import { SharedNgCommonModule } from '@expense-report/shared/ng/common';

@NgModule({
  imports: [SharedNgCommonModule],
  declarations: [ExpensesUiListComponent],
  exports: [ExpensesUiListComponent],
})
export class ExpensesUiListModule {}
