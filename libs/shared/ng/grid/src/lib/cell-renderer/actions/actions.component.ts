import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'expense-report-actions',
  templateUrl: './actions.component.html',
})
export class ActionsComponent implements ICellRendererAngularComp {
  agInit(): void {
    // do nothing
  }

  refresh(): boolean {
    return false;
  }
}
