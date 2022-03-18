import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';

@NgModule({
  declarations: [SamplePageComponent],
  imports: [SharedModule, SamplePageRoutingModule],
})
export class SamplePageModule {}
