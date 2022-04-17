import { Component, Input } from '@angular/core';

@Component({
  selector: 'expense-report-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type = 'button';
}
