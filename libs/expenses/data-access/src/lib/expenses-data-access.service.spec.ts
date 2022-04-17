import exp = require('constants');
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

  describe('given getExpense()', () => {
    const verb = 'GET';
    const expense = expenses[0];
    const { id: expenseId } = expense;
    const url = `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}/${expenseId}`;

    /**
     * NOTE: Must be run in order
     */
    describe('when called with valid id', () => {
      let request: TestRequest;

      beforeEach(() => {
        service.getExpense(expenseId).subscribe();
      });

      it(`make request to: /${url}`, () => {
        request = httpTestingController.expectOne(url);
        request.flush({ data: expense });
      });

      it(`is a ${verb} request`, () => {
        expect(request.request.method).toBe(verb);
      });
    });
  });

  describe('given updateExpenses()', () => {
    const verb = 'PATCH';
    const expenseUpdates = expenses;
    const url = `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}`;

    /**
     * NOTE: Must be run in order
     */
    describe('when called with valid updates', () => {
      let request: TestRequest;

      beforeEach(() => {
        service.updateExpenses(expenseUpdates).subscribe();
      });

      it(`make request to: /${url}`, () => {
        request = httpTestingController.expectOne(url);
        request.flush({ data: expenses });
      });

      it(`is a ${verb} request`, () => {
        expect(request.request.method).toBe(verb);
      });

      it('sends expense updates as part of request body', () => {
        expect(request.request.body).toBe(expenseUpdates);
      });
    });
  });

  describe('given updateExpense()', () => {
    const verb = 'PATCH';
    const expenseUpdate = expenses[0];
    const { id: expenseId } = expenseUpdate;
    const url = `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}/${expenseId}`;

    /**
     * NOTE: Must be run in order
     */
    describe('when called with a valid update', () => {
      let request: TestRequest;

      beforeEach(() => {
        service.updateExpense(expenseId, expenseUpdate).subscribe();
      });

      it(`make request to: /${url}`, () => {
        request = httpTestingController.expectOne(url);
        request.flush({ data: expenses });
      });

      it(`is a ${verb} request`, () => {
        expect(request.request.method).toBe(verb);
      });

      it('sends expense updates as part of request body', () => {
        expect(request.request.body).toBe(expenseUpdate);
      });
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

  describe('given deleteExpense()', () => {
    const verb = 'DELETE';

    it(`should call ${verb} /${EXPENSES_API_ROUTE}`, () => {
      const expenseIds = expenses.map(({ id }) => id);
      const expenseIdsCommaSeparated = expenseIds.join(',');

      service.deleteExpenses(expenseIds).subscribe();

      const request = httpTestingController.expectOne(
        `${GLOBAL_API_PREFIX}/${EXPENSES_API_ROUTE}/${expenseIdsCommaSeparated}`
      );
      expect(request.request.method).toBe(verb);
      request.flush({ data: expenses });
    });
  });
});
