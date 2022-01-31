import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxBootstrapModule } from './ngx-bootstrap.module';

/**
 * To be imported ONLY by root module
 */
@NgModule({
  imports: [NgxBootstrapModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
