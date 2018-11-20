import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {SnotifyService} from 'ng-snotify';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: []
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
        const userToken = localStorage.getItem('token');
        if (userToken !== null) {
            this.router.navigate(['tasks']);
        }
    }
    constructor(private auth: AuthenticationService, private snotifyService: SnotifyService, private router: Router) {
    }
    loginUser(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.auth.login(email, password).subscribe(
            data => {
                console.log(data);
                if (data.success === false) {
                    let errors = '';
                    for (const key in data.error) {
                        if (data.error.hasOwnProperty(key)) {
                            errors += data.error[key][0];
                        }
                    }
                    errors += '  ';
                    this.snotifyService.error(errors, 'Error');
                } else {
                    localStorage.setItem('token', data.data.token);
                    // this.router.navigate(['tasks']);
                    location.href = '/tasks';
                    // location.reload();
                }
            },
            err => {
                console.log(err);
                this.snotifyService.error('Error In Login, Please try again .');
            };
        )
    }
}
