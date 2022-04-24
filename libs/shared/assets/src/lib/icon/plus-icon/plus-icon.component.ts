import { Component, Input } from '@angular/core';
import { HeroIconStyle } from '@expense-report/shared/ng/common';

@Component({
  selector: 'expense-report-plus-icon',
  templateUrl: './plus-icon.component.html',
})
export class PlusIconComponent {
  @Input() heroIconStyle: HeroIconStyle = 'outline';
}
