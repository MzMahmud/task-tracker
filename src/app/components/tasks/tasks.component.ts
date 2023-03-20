import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task) {
    this.taskService
      .toggleReminder(task)
      .subscribe(t => task.reminder = t.reminder);
  }

  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe(t => this.tasks.push(t));
  }
}
