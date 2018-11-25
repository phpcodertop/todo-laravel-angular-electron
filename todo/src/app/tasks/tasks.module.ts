import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CustomFormsModule} from 'ngx-custom-validators';
import {TaskListComponent} from './task-list/task-list.component';
import {AuthGuard} from '../guards/auth.guard';
import {TasksTableComponent} from './task-list/tasks-table/tasks-table.component';
import {TasksSidebarComponent} from './task-list/tasks-sidebar/tasks-sidebar.component';
import {TasksService} from '../services/tasks.service';
import {CategoriesService} from '../services/categories.service';


const appRoutes: Routes = [
    {
        path: 'tasks',
        component: TaskListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        TaskListComponent,
        TasksTableComponent,
        TasksSidebarComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        FormsModule,
        CommonModule,
        CustomFormsModule
    ],
    providers: [
        TasksService,
        CategoriesService
    ],
    bootstrap: [],
    exports: [
        RouterModule
    ]
})
export class TasksModule { }
