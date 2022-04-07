import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ActionsComponent } from './cell-renderer/actions/actions.component';

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([ActionsComponent])],
  declarations: [ActionsComponent],
  exports: [AgGridModule, ActionsComponent],
})
export class SharedNgGridModule {}
