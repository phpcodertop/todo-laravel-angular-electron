import {Component, Input, OnInit} from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tasks-sidebar',
    templateUrl: './tasks-sidebar.component.html',
    styleUrls: []
})
export class TasksSidebarComponent {
    @Input() categoriesList;
    constructor(private snotifyService: SnotifyService, private router: Router) {
    }
}
