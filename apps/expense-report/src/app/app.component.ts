import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'expense-report-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  hello$ = this.http.get<{ message: string }>('/api');
  constructor(private http: HttpClient) {}
}
