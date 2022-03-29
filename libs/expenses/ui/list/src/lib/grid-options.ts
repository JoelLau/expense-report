import { formatCurrency, formatDate } from '@angular/common';
import { GridReadyEvent, ValueFormatterParams } from 'ag-grid-community';

export const gridOptions = {
  columnDefs: [
    { field: 'id', headerName: 'Id' },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'numericColumn',
      valueFormatter: ({ value }: ValueFormatterParams): string =>
        formatCurrency(Number(value / 100), 'en', '$'),
    },
    { field: 'category', headerName: 'Category' },
    {
      field: 'date',
      headerName: 'Date',
      type: 'dateColumn',
      valueFormatter: ({ value }: ValueFormatterParams): string =>
        formatDate(value, 'yyyy-MM-dd', 'en'),
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
