import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EXPENSES_API_ROUTE } from '@expense-report/expenses/api';
import { ExpenseCreateInput } from '@expense-report/expenses/shared';

@Injectable({
  providedIn: 'root',
})
export class ExpensesDataAccessService {
  constructor(private http: HttpClient) {}

  createExpenses(expenses: ExpenseCreateInput[]) {
    return this.http.post(`${EXPENSES_API_ROUTE}`, expenses);
  }

  getExpenses() {
    return this.http.get(`${EXPENSES_API_ROUTE}`);
  }

  getExpense(expenseId: string) {
    return this.http.get(`${EXPENSES_API_ROUTE}/${expenseId}`);
  }

  updateExpenses(expenses: ExpenseCreateInput[]) {
    return this.http.patch(`${EXPENSES_API_ROUTE}`, expenses);
  }

  updateExpense(expenseId: string, expense: ExpenseCreateInput) {
    return this.http.patch(`${EXPENSES_API_ROUTE}/${expenseId}`, expense);
  }

  deleteExpense(expenseId: string) {
    return this.http.delete(`${EXPENSES_API_ROUTE}/${expenseId}`);
  }

  deleteExpenses(expenseIds: string[]) {
    return this.http.delete(`${EXPENSES_API_ROUTE}/${expenseIds.join(',')}`);
  }
}
