import { NgModule } from '@angular/core';
import { ExpensesUiPageRoutingModule } from './expenses-ui-page-routing.module';
import { ExpensesUiPageComponent } from './expenses-ui-page.component';
import { ExpensesUiListModule } from '@expense-report/expenses/ui/list';
import { SharedNgCommonModule } from '@expense-report/shared/ng/common';

@NgModule({
  imports: [
    SharedNgCommonModule,
    ExpensesUiListModule,
    ExpensesUiPageRoutingModule,
  ],
  declarations: [ExpensesUiPageComponent],
})
export class ExpensesUiPageModule {}
