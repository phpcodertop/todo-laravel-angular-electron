import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CustomFormsModule} from 'ngx-custom-validators';
import {TaskListComponent} from './task-list/task-list.component';
import {AuthGuard} from '../guards/auth.guard';


const appRoutes: Routes = [
    {
        path: 'tasks',
        component: TaskListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        TaskListComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        FormsModule,
        CommonModule,
        CustomFormsModule
    ],
    providers: [

    ],
    bootstrap: [],
    exports: [
        RouterModule
    ]
})
export class TasksModule { }
