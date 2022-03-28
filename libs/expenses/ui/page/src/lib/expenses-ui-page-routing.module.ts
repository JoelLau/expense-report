import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ExpensesUiPageComponent } from './expense-ui-page.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ExpensesUiPageComponent,
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
export class ExpensesUiPageRoutingModule {}
