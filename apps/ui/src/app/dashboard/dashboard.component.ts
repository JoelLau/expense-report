import { Component } from '@angular/core';
import {
  FirstDataRenderedEvent,
  GridOptions,
  GridReadyEvent,
  GridSizeChangedEvent,
  ModelUpdatedEvent,
  ValueFormatterParams,
} from 'ag-grid-community';

@Component({
  selector: 'expense-report-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  gridOptions: GridOptions = {
    columnDefs: [
      { headerName: 'Date', field: 'date', type: 'dateColumn' },
      {
        headerName: 'Shop Name',
        field: 'shopName',
        type: 'textColumn',
      },
      {
        headerName: 'Amount',
        field: 'amount',
        type: 'currencyColumn',
      },
      {
        headerName: 'Currency',
        field: 'currency',
        type: 'textColumn',
      },
      {
        headerName: 'Category',
        field: 'category',
        type: 'textColumn',
      },
    ],
    rowData: [
      {
        date: '2022-01-01',
        shopName: 'example shop 1',
        amount: 1111,
        currency: 'SGD',
        category: 'Eating Out',
      },
      {
        date: '2022-01-01',
        shopName: 'example shop 2',
        amount: 2222,
        currency: 'SGD',
        category: 'Eating Out',
      },
      {
        date: '2022-01-01',
        shopName: 'example shop 3',
        amount: 3333,
        currency: 'SGD',
        category: 'Eating Out',
      },
    ],
    defaultColDef: {
      filter: true,
      sortable: true,
      resizable: true,
    },
    columnTypes: {
      dateColumn: {
        filter: 'agDateColumnFilter',
      },
      textColumn: {
        filter: 'agTextColumnFilter',
      },
      currencyColumn: {
        headerClass: 'ag-right-aligned-header',
        cellClass: 'ag-right-aligned-cell',
        filter: 'agNumberColumnFilter',
        valueFormatter: ({ value }: ValueFormatterParams): string => {
          return `${(value as number).toFixed(2)}`;
        },
      },
    },
    onFirstDataRendered: ({ api }: FirstDataRenderedEvent): void => {
      api.sizeColumnsToFit();
    },
    onGridReady: ({ api }: GridReadyEvent): void => {
      api.sizeColumnsToFit();
    },
    onGridSizeChanged: ({ api }: GridSizeChangedEvent): void => {
      api.sizeColumnsToFit();
    },
    onModelUpdated: ({ api }: ModelUpdatedEvent): void => {
      api.sizeColumnsToFit();
    },
  };
}
