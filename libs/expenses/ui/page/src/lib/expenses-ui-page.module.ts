import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpensesUiPageComponent } from './expense-ui-page.component';
import { ExpensesUiPageRoutingModule } from './expenses-ui-page-routing.module';

@NgModule({
  imports: [CommonModule, ExpensesUiPageRoutingModule],
  declarations: [ExpensesUiPageComponent],
})
export class ExpensesUiPageModule {}
