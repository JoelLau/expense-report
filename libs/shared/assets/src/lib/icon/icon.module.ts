import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { FilterIconComponentModule } from './filter-icon/filter-icon.module';

@NgModule({
  imports: [CommonModule, FilterIconComponentModule],
  declarations: [IconComponent],
  exports: [IconComponent, FilterIconComponentModule],
})
export class IconComponentModule {}
