import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddForm: boolean;

  constructor(private uiService: UiService, private router: Router) {
    this.showAddForm = this.uiService.getCurrentShowAddForm();
    this.uiService.onToggle().subscribe(value => this.showAddForm = value);
  }

  toggleAddTask() {
    this.uiService.toggleShowAddForm();
  }

  hasRoute(url: string) {
    return this.router.url === url;
  }
}
