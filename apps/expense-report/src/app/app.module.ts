import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedNgCoreModule } from '@expense-report/shared/ng/core';
import { SharedNgCommonModule } from '@expense-report/shared/ng/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,

    // Third Party

    // Core & Common Modules
    SharedNgCoreModule.forRoot(),
    SharedNgCommonModule,

    // App Module
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
