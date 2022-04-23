import { NgModule } from '@angular/core';
import { ExpensesUiListItemComponent } from './expenses-ui-list-item.component';
import { ExpensesUiListComponent } from './expenses-ui-list.component';
import { SharedNgCommonModule } from '@expense-report/shared/ng/common';
import { TypographyComponentModule } from '@expense-report/shared/ui';

@NgModule({
  imports: [SharedNgCommonModule, TypographyComponentModule],
  declarations: [ExpensesUiListComponent, ExpensesUiListItemComponent],
  exports: [ExpensesUiListComponent],
})
export class ExpensesUiListModule {}
