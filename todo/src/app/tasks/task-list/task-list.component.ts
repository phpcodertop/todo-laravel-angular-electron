import {Component, OnInit} from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {Router} from '@angular/router';
import {TasksService} from '../../services/tasks.service';
import {CategoriesService} from "../../services/categories.service";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: []
})
export class TaskListComponent implements OnInit {
    tasks: any = null;
    categories: any = null;
    ngOnInit(): void {
        this.tasksService.getAllTasks().subscribe((data) => {
            this.tasks = data.data.tasks;
            console.log(this.tasks);
        });
        this.categoriesService.getAllCategories().subscribe((data) => {
            console.log(data.data.categories);
            this.categories = data.data.categories;
        });
    }
    constructor(private snotifyService: SnotifyService,
                private router: Router,
                private tasksService: TasksService,
                private categoriesService: CategoriesService
    ) {
    }
}
