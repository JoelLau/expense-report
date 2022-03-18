import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./sample-page/sample-page.module').then(
        (m) => m.SamplePageModule
      ),
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  bootstrap: [],
})
export class AppRoutingModule {}
