import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpensesUiRoutingModule } from './expenses-ui-routing.module';
import { ExpensesUiComponent } from './expenses-ui.component';

@NgModule({
  imports: [CommonModule, ExpensesUiRoutingModule],
  declarations: [ExpensesUiComponent],
})
export class ExpensesUiModule {}
