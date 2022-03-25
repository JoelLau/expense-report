import { TestBed } from '@angular/core/testing';
import { TransactionLineItemService } from './transaction-line-item.service';

describe('TransactionLineItemService', () => {
  let service: TransactionLineItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionLineItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
