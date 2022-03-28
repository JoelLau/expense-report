import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExpensesUiComponent } from './expenses-ui.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ExpensesUiComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesUiRoutingModule {}
