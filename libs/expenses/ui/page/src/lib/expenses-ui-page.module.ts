import { NgModule } from '@angular/core';
import { ExpensesUiPageRoutingModule } from './expenses-ui-page-routing.module';
import { ExpensesUiPageComponent } from './expenses-ui-page.component';
import { ExpensesUiListModule } from '@expense-report/expenses/ui/list';
import { SharedNgCommonModule } from '@expense-report/shared/ng/common';
import { ButtonComponentModule } from '@expense-report/shared/ui';

@NgModule({
  imports: [
    SharedNgCommonModule,
    ExpensesUiListModule,
    ExpensesUiPageRoutingModule,
    ButtonComponentModule,
  ],
  declarations: [ExpensesUiPageComponent],
})
export class ExpensesUiPageModule {}
