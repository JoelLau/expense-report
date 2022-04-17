import { URLSearchParams } from 'url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Expense,
  ExpenseCreateInput,
  EXPENSES_API_ROUTE,
  GLOBAL_API_PREFIX,
} from '@expense-report/expenses/shared';

@Injectable({
  providedIn: 'root',
})
export class ExpensesDataAccessService {
  constructor(private http: HttpClient) {}

  createExpenses(expenses: ExpenseCreateInput[]) {
    return this.http.post(
      `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}`,
      expenses
    );
  }

  getExpenses(): Observable<{ data: Expense[] }> {
    return this.http.get<{ data: Expense[] }>(
      `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}`
    );
  }

  getExpense(expenseId: string) {
    return this.http.get(
      `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}/${expenseId}`
    );
  }

  updateExpenses(expenses: ExpenseCreateInput[]) {
    return this.http.patch(
      `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}`,
      expenses
    );
  }

  updateExpense(expenseId: string, expense: ExpenseCreateInput) {
    return this.http.patch(
      `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}/${expenseId}`,
      expense
    );
  }

  deleteExpenses(expenseIds: string[]) {
    const searchParams = new URLSearchParams([['ids', expenseIds.join(',')]]);

    return this.http.delete(
      `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}?${searchParams}`
    );
  }

  deleteExpense(expenseId: string) {
    return this.http.delete(
      `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}/${expenseId}`
    );
  }
}
