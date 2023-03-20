import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddForm: boolean = false;
  title: string = 'Task Tracker';

  constructor(private uiService: UiService, private router: Router) {
    uiService.onToggle().subscribe(value => this.showAddForm = value);
  }

  ngOnInit() {

  }

  toggleAddTask() {
    this.uiService.toggleShowAddForm();
  }

  hasRoute(url: string): boolean {
    return this.router.url === url;
  }
}
