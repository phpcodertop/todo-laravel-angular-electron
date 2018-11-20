import {Component, OnInit} from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {Router} from '@angular/router';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: []
})
export class TaskListComponent {
    constructor(private snotifyService: SnotifyService, private router: Router) {
    }
}
