import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@expense-report/api-interfaces';

@Component({
  selector: 'expense-report-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api');
  constructor(private http: HttpClient) {}
}
