import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
  token = '';
  ngOnInit(): void {
      this.token = localStorage.getItem('token');
  }
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  logout() {
      this.authenticationService.logout();
      this.token = null;
      this.router.navigate(['/login']);
  }
}
