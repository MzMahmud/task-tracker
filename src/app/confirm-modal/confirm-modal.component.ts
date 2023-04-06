import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, first, takeWhile } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
  @Input() show = false;
  @Input() message = 'Are you sure?';
  @Input() yesText = 'Yes';
  @Input() noText = 'No';

  private confirmSubject$ = new Subject<boolean>();

  hideModal(confirm: boolean) {
    this.show = false;
    this.confirmSubject$.next(confirm);
  }

  confirm$() {
    this.show = true;
    return this.confirmSubject$.pipe(first());
  }
}
