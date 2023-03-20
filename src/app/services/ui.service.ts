import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddForm: boolean = false;
  private subject = new Subject<boolean>();
  
  constructor() {}

  toggleShowAddForm() {
    this.showAddForm = !this.showAddForm;
    this.subject.next(this.showAddForm);
  }

  onToggle() {
    return this.subject.asObservable();
  }
}
