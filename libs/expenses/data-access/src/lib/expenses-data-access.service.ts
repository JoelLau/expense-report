import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Expense,
  ExpenseCreateInput,
  EXPENSES_API_ROUTE,
} from '@expense-report/expenses/shared';

@Injectable({
  providedIn: 'root',
})
export class ExpensesDataAccessService {
  constructor(private http: HttpClient) {}

  createExpenses(expenses: ExpenseCreateInput[]) {
    return this.http.post(`api/${EXPENSES_API_ROUTE}`, expenses);
  }

  getExpenses(): Observable<{ data: Expense[] }> {
    return this.http.get<{ data: Expense[] }>(`api/${EXPENSES_API_ROUTE}`);
  }

  getExpense(expenseId: string) {
    return this.http.get(`api/${EXPENSES_API_ROUTE}/${expenseId}`);
  }

  updateExpenses(expenses: ExpenseCreateInput[]) {
    return this.http.patch(`api/${EXPENSES_API_ROUTE}`, expenses);
  }

  updateExpense(expenseId: string, expense: ExpenseCreateInput) {
    return this.http.patch(`api/${EXPENSES_API_ROUTE}/${expenseId}`, expense);
  }

  deleteExpense(expenseId: string) {
    return this.http.delete(`api/${EXPENSES_API_ROUTE}/${expenseId}`);
  }

  deleteExpenses(expenseIds: string[]) {
    return this.http.delete(
      `api/${EXPENSES_API_ROUTE}/${expenseIds.join(',')}`
    );
  }
}
