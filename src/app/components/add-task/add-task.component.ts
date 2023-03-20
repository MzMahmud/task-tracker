import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddForm: boolean;

  constructor(private uiService: UiService) {
    this.showAddForm = this.uiService.getCurrentShowAddForm();
    this.uiService.onToggle().subscribe(value => this.showAddForm = value);
  }

  onSubmit() {
    if (!this.text) {
      alert("Please insert a task!");
      return;
    }

    const newtask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newtask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
