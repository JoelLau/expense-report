import { Component } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'expense-report-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  columnDefs: (ColDef | ColGroupDef)[] = [
    { field: 'asdf' },
    { field: 'qwer' },
    { field: 'zxcv' },
  ];

  rowData = [
    { asdf: 'aaaa', qwer: 'aaaa', zxcv: 'aaaa' },
    { asdf: 'bbbb', qwer: 'bbbb', zxcv: 'bbbb' },
    { asdf: 'cccc', qwer: 'cccc', zxcv: 'cccc' },
  ];

  onButtonClick(event: MouseEvent): void {
    console.log(event);
  }
}
