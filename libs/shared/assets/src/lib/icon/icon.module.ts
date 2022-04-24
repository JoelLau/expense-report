import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { FilterIconComponentModule } from './filter-icon/filter-icon.module';
import { PlusIconComponentModule } from './plus-icon/plus-icon.module';

@NgModule({
  imports: [CommonModule, FilterIconComponentModule, PlusIconComponentModule],
  declarations: [IconComponent],
  exports: [IconComponent, FilterIconComponentModule, PlusIconComponentModule],
})
export class IconComponentModule {}
