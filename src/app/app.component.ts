import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Task Tracker';
  months = [
    "January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"
  ];
  selectedMonth = 10;
}
