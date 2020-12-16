import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'direct-line-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'faqs';
  faqs = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('/assets/faqs.json')
      .subscribe((faqs) => (this.faqs = faqs));
  }
}
