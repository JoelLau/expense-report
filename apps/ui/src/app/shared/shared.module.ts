import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

/**
 * To be imported by **ALL MODULES**
 */
const imports = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  imports: [...imports, AgGridModule.withComponents([])],
  exports: [...imports, AgGridModule],
})
export class SharedModule {}
