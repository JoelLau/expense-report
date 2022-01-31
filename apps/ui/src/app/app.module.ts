import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    AgGridModule.withComponents([]),

    // Third Party
    AuthModule,

    // Core & Shared
    CoreModule.forRoot(),
    SharedModule,

    // App Module
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
