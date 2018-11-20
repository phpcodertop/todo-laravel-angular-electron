import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CustomFormsModule} from 'ngx-custom-validators';


const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
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
        LoginComponent, RegisterComponent,
        RouterModule
    ]
})
export class AuthModule { }
