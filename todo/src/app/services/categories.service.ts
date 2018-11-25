import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs/index';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
    headers: HttpHeaders;
    userToken;
    constructor(private http: HttpClient) {
        this.userToken = localStorage.getItem('token');
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.userToken
        });
    }

    getAllCategories() {
        return this.http.get<any>(`${environment.apiUrl}user/categories`, { headers: this.headers });
    }
}
