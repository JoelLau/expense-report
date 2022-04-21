import { Component, Input } from '@angular/core';

@Component({
  selector: 'expense-report-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() size: ButtonSizes = 'md';
  @Input() color: ButtonColors = 'transparent';
  @Input() border = true;
}

export type ButtonSizes = 'zero' | 'sm' | 'md' | 'lg' | 'fill';
export type ButtonColors = 'transparent' | 'disabled';
