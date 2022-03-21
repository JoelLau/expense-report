import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionLineItemService {
  constructor(private http: HttpClient) {}

  fetchAll() {
    return this.http.get(`/api/transaction-line-items`);
  }
}
