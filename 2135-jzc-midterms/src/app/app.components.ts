import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes-reactive';
  presentDate = new Date();

  price: number = 2000;

  decimalNum1: number = 8.7598623;
  decimalNum2: number = 5.43;

  todayO$ = new Observable<Date>((observer) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });
}
