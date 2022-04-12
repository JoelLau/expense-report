import { formatCurrency, formatDate } from '@angular/common';
import {
  GridOptions,
  GridReadyEvent,
  GridSizeChangedEvent,
  ITooltipParams,
  ValueFormatterParams,
} from 'ag-grid-community';
import { AMOUNT_PRECISION } from '@expense-report/expenses/shared';
import { ActionsComponent } from '@expense-report/shared/ng/grid';

export const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'id' }, // TODO: remove before release
    {
      field: 'date',
      type: 'dateColumn',
      valueFormatter: ({ value }: ValueFormatterParams): string =>
        formatDate(value, 'yyyy-MM-dd', 'en'),
    },
    { field: 'category' },
    { field: 'name' },
    { field: 'description' },
    {
      field: 'amount',
      type: 'numericColumn',
      valueFormatter: ({ value }: ValueFormatterParams): string =>
        formatCurrency(Number(value / AMOUNT_PRECISION), 'en', '$'),
    },
    {
      type: 'actionColumn',
    },
  ],
  defaultColDef: {
    filter: true,
    sortable: true,
    resizable: true,
    pivot: true,
    tooltipValueGetter: ({ value, valueFormatted }: ITooltipParams) => {
      return valueFormatted || value;
    },
  },
  columnTypes: {
    dateColumn: {
      filter: 'agDateColumnFilter',
      suppressMenu: true,
    },
    actionColumn: {
      sortable: false,
      filter: false,
      cellRenderer: ActionsComponent,
      type: 'rightAligned',
    },
  },
  onGridReady: ({ api }: GridReadyEvent): void => {
    api.sizeColumnsToFit();
  },
  onGridSizeChanged: ({ api }: GridSizeChangedEvent): void => {
    api.sizeColumnsToFit();
  },
};
