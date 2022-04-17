import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ActionsComponent } from './cell-renderer/actions/actions.component';
import { ButtonComponentModule } from '@expense-report/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([ActionsComponent]),
    ButtonComponentModule,
  ],
  declarations: [ActionsComponent],
  exports: [AgGridModule, ActionsComponent],
})
export class SharedNgGridModule {}
