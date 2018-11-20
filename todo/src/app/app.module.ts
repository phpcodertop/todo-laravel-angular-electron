import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {AuthenticationService} from './services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {TasksModule} from './tasks/tasks.module';

const appRoutes: Routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SnotifyModule,
    HttpClientModule,
    TasksModule
  ],
  providers: [
      { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
      SnotifyService,
      AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
