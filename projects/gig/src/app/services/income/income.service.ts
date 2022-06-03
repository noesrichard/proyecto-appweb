import { Injectable } from '@angular/core';
import { Income } from './income';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class IncomeService{

    url: string = '/api/income/';
    userid?: any = sessionStorage.getItem("userid"); 

    constructor(private http: HttpClient) {}


    list(): Observable<any> {
        return this.http.get(this.url+this.userid);
    }

    findById(id: any): Observable<any> {
        return this.http.get(this.url + id);
    }

    create(income: Income) {
        return this.http.post(this.url, income);
    }

    update(id: any, income: Income) {
        return this.http.put(this.url + id, income);
    }

    delete(id: any) {
        return this.http.delete(this.url + id);
    }
}
