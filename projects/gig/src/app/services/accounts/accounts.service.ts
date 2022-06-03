import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
    providedIn: 'root',
})
export class AccountsService {
    url: string = '/api/accounts/';

    userid?: any = sessionStorage.getItem("userid"); 

    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        return this.http.get(this.url+this.userid);
    }

    findById(id: any): Observable<any> {
        return this.http.get(this.url + id);
    }

    create(account: Account) {
        console.log(account); 
        return this.http.post(this.url, account);
    }

    update(id: any, account: Account) {
        return this.http.put(this.url + id, account);
    }

    delete(id: any) {
        return this.http.delete(this.url + id);
    }
}
