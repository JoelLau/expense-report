import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionLineItem } from '@prisma/client';

@Injectable({
  providedIn: 'root',
})
export class TransactionLineItemService {
  constructor(private http: HttpClient) {}

  fetchAll() {
    return this.http.get<{ data: TransactionLineItem[] }>(
      `/api/transaction-line-items`
    );
  }
}
