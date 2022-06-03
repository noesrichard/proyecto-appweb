import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    url = '/api/user/';
    constructor(private httpClient: HttpClient) {}

    create(user: User): Observable<any> {
        return this.httpClient.post(this.url, user);
    }

    findUser(user: User): Observable<any>{ 
        return this.httpClient.get(this.url+user.username+"/"+user.password);
    }

}
