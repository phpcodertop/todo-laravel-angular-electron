import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs/index';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}login`,
            { 'email': email, 'password': password });
    }

    register(username: string, email: string, password: string): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}register`,
            { 'name': username, 'email': email, 'password': password });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }
}
