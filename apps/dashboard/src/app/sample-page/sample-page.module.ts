import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import { TransactionLineItemService } from './transaction-line-item.service';

@NgModule({
  declarations: [SamplePageComponent],
  imports: [SharedModule, SamplePageRoutingModule],
  providers: [TransactionLineItemService],
})
export class SamplePageModule {}
