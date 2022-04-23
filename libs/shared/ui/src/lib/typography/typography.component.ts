import { Component, Input } from '@angular/core';

@Component({
  selector: 'expense-report-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  @Input() type: TypographyType = 'h1';
  @Input() xAlign: TypographyXAlign = 'left';
  @Input() noWrap = false;
  @Input() title = '';
}

export type TypographyType = 'h1' | 'h1-small' | 'h2' | 'p';
export type TypographyXAlign = 'left' | 'right' | 'center' | 'justify';
