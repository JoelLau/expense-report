import { ModuleWithProviders, NgModule } from '@angular/core';

/**
 * To be imported ONLY by root module
 */
@NgModule()
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
