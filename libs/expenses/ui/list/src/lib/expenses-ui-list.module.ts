import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ExpensesUiListComponent } from './expenses-ui-list.component';
import { SharedNgCommonModule } from '@expense-report/shared/ng/common';

@NgModule({
  imports: [SharedNgCommonModule, AgGridModule.withComponents([])],
  declarations: [ExpensesUiListComponent],
  exports: [ExpensesUiListComponent, AgGridModule],
})
export class ExpensesUiListModule {}
