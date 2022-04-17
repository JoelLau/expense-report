import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ExpensesDataAccessService } from './expenses-data-access.service';
import {
  expenseInputs,
  expenses,
  EXPENSES_API_ROUTE,
  GLOBAL_API_PREFIX,
} from '@expense-report/expenses/shared';

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('given createExpenses()', () => {
    const verb = 'POST';
    const url = `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}`;

    /**
     * NOTE: Must be run in order
     */
    describe('when called', () => {
      let request: TestRequest;
      const newExpenses = expenseInputs;

      beforeEach(() => {
        service.createExpenses(newExpenses).subscribe();
      });

      it(`make request to: /${url}`, () => {
        request = httpTestingController.expectOne(url);
        request.flush({ data: expenses });
      });

      it(`is a ${verb} request`, () => {
        expect(request.request.method).toBe(verb);
      });

      it('sends new expenses as part of request body', () => {
        expect(request.request.body).toBe(newExpenses);
      });
    });
  });

  describe('given getExpenses()', () => {
    const verb = 'GET';
    const url = `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}`;

    /**
     * NOTE: Must be run in order
     */
    describe('when called', () => {
      let request: TestRequest;

      beforeEach(() => {
        service.getExpenses().subscribe();
      });

      it(`make request to: /${url}`, () => {
        request = httpTestingController.expectOne(url);
        request.flush({ data: expenses });
      });

      it(`is a ${verb} request`, () => {
        expect(request.request.method).toBe(verb);
      });
    });
  });

  describe('given updateExpenses()', () => {
    const verb = 'PATCH';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      service.updateExpenses(expenses).subscribe();

      const request = httpTestingController.expectOne(
        `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}`
      );
      expect(request.request.method).toBe(verb);
      request.flush([]);
    });
  });

  describe('given updateExpense()', () => {
    const verb = 'PATCH';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      const expense = expenses[0];
      service.updateExpense(expense.id, expense).subscribe();

      const request = httpTestingController.expectOne(
        `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}/${expense.id}`
      );
      expect(request.request.method).toBe(verb);
      request.flush({ data: expenses });
    });
  });

  describe('given deleteExpense()', () => {
    const verb = 'DELETE';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      const expense = expenses[0];
      service.deleteExpense(expense.id).subscribe();

      const request = httpTestingController.expectOne(
        `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}/${expense.id}`
      );
      expect(request.request.method).toBe(verb);
      request.flush({ data: expenses });
    });
  });

  describe('given deleteExpenses()', () => {
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
