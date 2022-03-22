import { Component } from '@angular/core';
import { TransactionLineItem } from '@prisma/client';
import {
  GridOptions,
  GridReadyEvent,
  ValueFormatterParams,
} from 'ag-grid-community';
import { map, Observable } from 'rxjs';
import { TransactionLineItemService } from './transaction-line-item.service';
@Component({
  selector: 'expense-report-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
})
export class SamplePageComponent {
  gridOptions: GridOptions;
  transactionLineItem$: Observable<TransactionLineItem[]> =
    this.transactionLineItemService
      .fetchAll()
      .pipe(
        map(({ data }: { data: TransactionLineItem[] }) => data.sort())
      ) as Observable<TransactionLineItem[]>;

  constructor(private transactionLineItemService: TransactionLineItemService) {
    this.gridOptions = {
      columnDefs: [
        { field: 'id', headerName: 'Id' },
        {
          field: 'amount',
          headerName: 'Amount',
          type: 'numericColumn',
          valueFormatter: ({ value }: ValueFormatterParams): string =>
            `$${Number(value / 100).toFixed(2)}`,
        },
        { field: 'category', headerName: 'Category' },
        {
          field: 'date',
          headerName: 'Date',
          type: 'dateColumn',
          valueFormatter: ({ value }: ValueFormatterParams): string =>
            new Date(value).toISOString().slice(0, 10),
        },
        { field: 'description', headerName: 'Description' },
        { field: 'name', headerName: 'Name' },
      ],
      defaultColDef: {
        filter: true,
        sortable: true,
        resizable: true,
        pivot: true,
      },
      columnTypes: {
        dateColumn: {
          filter: 'agDateColumnFilter',
          suppressMenu: true,
        },
      },
      onGridReady: ({ api }: GridReadyEvent): void => {
        api.sizeColumnsToFit();
      },
    };
  }
}
