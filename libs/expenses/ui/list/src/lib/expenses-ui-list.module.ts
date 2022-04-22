import { NgModule } from '@angular/core';
import { ExpensesUiListItemComponent } from './expenses-ui-list-item.component';
import { ExpensesUiListComponent } from './expenses-ui-list.component';
import { SharedNgCommonModule } from '@expense-report/shared/ng/common';

@NgModule({
  imports: [SharedNgCommonModule],
  declarations: [ExpensesUiListComponent, ExpensesUiListItemComponent],
  exports: [ExpensesUiListComponent],
})
export class ExpensesUiListModule {}
