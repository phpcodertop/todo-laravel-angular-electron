import {Component, Input, OnInit} from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tasks-table',
    templateUrl: './tasks-table.component.html',
    styleUrls: []
})
export class TasksTableComponent {
    @Input() tasksList;
    constructor(private snotifyService: SnotifyService, private router: Router) {
    }
}
