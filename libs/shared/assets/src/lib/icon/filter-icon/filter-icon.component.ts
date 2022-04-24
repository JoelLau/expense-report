import { Component, Input } from '@angular/core';
import { HeroIconStyle } from '@expense-report/shared/ng/common';

@Component({
  selector: 'expense-report-filter-icon',
  templateUrl: './filter-icon.component.html',
})
export class FilterIconComponent {
  @Input() heroIconStyle: HeroIconStyle = 'outline';
}
