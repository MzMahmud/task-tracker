import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddForm: boolean = false;
  title: string = 'Task Tracker';

  constructor(private uiService: UiService) {
    uiService.onToggle().subscribe(value => this.showAddForm = value);
  }

  ngOnInit() {

  }

  toggleAddTask() {
    this.uiService.toggleShowAddForm();
  }
}
