import { Component, ViewChild } from '@angular/core';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Task Tracker';

  @ViewChild('confirmModal')
  confirmModal!: ConfirmModalComponent;

  async openModal() {
    /*
    used with subscribe
    this.confirmModal
      .confirm$()
      .subscribe(confirm => {
        console.log(confirm);
      });
    */
    const confirm = await firstValueFrom(this.confirmModal.confirm$());
    console.log(confirm);
  }
}
