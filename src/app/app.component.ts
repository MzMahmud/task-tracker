import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { filter, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Task Tracker';

  @ViewChild('confirmModal')
  confirmModal!: ConfirmModalComponent;

  openModal() {
    this.confirmModal
      .confirm$()
      .subscribe(confirm => {
        console.log(confirm);
      });
  }
}
