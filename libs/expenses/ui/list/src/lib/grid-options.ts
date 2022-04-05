import { formatCurrency, formatDate } from '@angular/common';
import {
  GridOptions,
  GridReadyEvent,
  GridSizeChangedEvent,
  ValueFormatterParams,
} from 'ag-grid-community';
import { AMOUNT_PRECISION } from '@expense-report/expenses/shared';

export const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'id', headerName: 'Id' }, // TODO: remove before release
    {
      field: 'date',
      headerName: 'Date',
      type: 'dateColumn',
      valueFormatter: ({ value }: ValueFormatterParams): string =>
        formatDate(value, 'yyyy-MM-dd', 'en'),
    },
    { field: 'category', headerName: 'Category' },
    { field: 'name', headerName: 'Name' },
    { field: 'description', headerName: 'Description' },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'numericColumn',
      valueFormatter: ({ value }: ValueFormatterParams): string =>
        formatCurrency(Number(value / AMOUNT_PRECISION), 'en', '$'),
    },
    {
      sortable: false,
      filter: false,
    },
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
  onGridSizeChanged: ({ api }: GridSizeChangedEvent): void => {
    api.sizeColumnsToFit();
  },
};
