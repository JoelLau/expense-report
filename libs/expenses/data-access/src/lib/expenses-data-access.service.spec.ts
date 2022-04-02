import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ExpensesDataAccessService } from './expenses-data-access.service';
import { expenses, EXPENSES_API_ROUTE } from '@expense-report/expenses/shared';

describe('ExpensesDataAccessService', () => {
  let service: ExpensesDataAccessService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExpensesDataAccessService],
    });
    service = TestBed.inject(ExpensesDataAccessService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createExpenses', () => {
    const verb = 'POST';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      service.createExpenses(expenses).subscribe();

      const request = httpTestingController.expectOne(`${EXPENSES_API_ROUTE}`);
      expect(request.request.method).toBe(verb);
      request.flush({ data: expenses });
    });
  });

  describe('getExpense', () => {
    const verb = 'GET';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      const expense = expenses[0];
      service.getExpense(expense.id).subscribe();

      const request = httpTestingController.expectOne(
        `${EXPENSES_API_ROUTE}/${expense.id}`
      );
      expect(request.request.method).toBe(verb);
      request.flush({ data: expenses });
    });
  });

  describe('updateExpenses', () => {
    const verb = 'PATCH';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      service.updateExpenses(expenses).subscribe();

      const request = httpTestingController.expectOne(`${EXPENSES_API_ROUTE}`);
      expect(request.request.method).toBe(verb);
      request.flush([]);
    });
  });

  describe('updateExpense', () => {
    const verb = 'PATCH';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      const expense = expenses[0];
      service.updateExpense(expense.id, expense).subscribe();

      const request = httpTestingController.expectOne(
        `${EXPENSES_API_ROUTE}/${expense.id}`
      );
      expect(request.request.method).toBe(verb);
      request.flush({ data: expenses });
    });
  });

  describe('deleteExpense', () => {
    const verb = 'DELETE';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      const expense = expenses[0];
      service.deleteExpense(expense.id).subscribe();

      const request = httpTestingController.expectOne(
        `${EXPENSES_API_ROUTE}/${expense.id}`
      );
      expect(request.request.method).toBe(verb);
      request.flush({ data: expenses });
    });
  });

  describe('deleteExpenses', () => {
    const verb = 'DELETE';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      const expenseIds = expenses.map(({ id }) => id);
      const expenseIdsCommaSeparated = expenseIds.join(',');

      service.deleteExpenses(expenseIds).subscribe();

      const request = httpTestingController.expectOne(
        `${EXPENSES_API_ROUTE}/${expenseIdsCommaSeparated}`
      );
      expect(request.request.method).toBe(verb);
      request.flush({ data: expenses });
    });
  });
});
