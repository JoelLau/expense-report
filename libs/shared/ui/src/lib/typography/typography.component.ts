import { Component, Input } from '@angular/core';

@Component({
  selector: 'expense-report-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  @Input() type: TypographyType = 'h1';
}

export type TypographyType = 'h1' | 'h1-small' | 'h2';
