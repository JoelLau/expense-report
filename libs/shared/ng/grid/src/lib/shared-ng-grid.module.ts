import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([])],
  exports: [AgGridModule],
})
export class SharedNgGridModule {}
