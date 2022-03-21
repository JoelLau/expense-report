import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

/**
 * To be imported by **ALL MODULES**
 */
const basicModules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  imports: [...basicModules, AgGridModule.withComponents([])],
  exports: [...basicModules, AgGridModule],
})
export class SharedModule {}
