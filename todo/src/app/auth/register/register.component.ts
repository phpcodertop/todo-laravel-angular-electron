import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {AuthenticationService} from '../../services/authentication.service';
import {NgForm} from '@angular/forms';
import {SnotifyService} from 'ng-snotify';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: []
})
export class RegisterComponent implements OnInit {
    user: User = new User(1, '', '', '');
    ngOnInit(): void {
        const token = localStorage.getItem('token');
        if (token !== null) {
            this.router.navigate(['tasks']);
        }
    }

    constructor(private auth: AuthenticationService, private snotifyService: SnotifyService, private router: Router) {
    }

    registerUser(form: NgForm) {
        const username = form.value.name;
        const email = form.value.email;
        const password = form.value.password;
        this.auth.register(username, email, password).subscribe(
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
                    this.snotifyService.success('Registeration successful');
                    setTimeout(() => {
                        this.router.navigate(['login']);
                    }, 2000);
                }
            },
            err => {
                console.log(err);
                this.snotifyService.error('Error In Register, Please try again .');
            }
        );
    }

}
