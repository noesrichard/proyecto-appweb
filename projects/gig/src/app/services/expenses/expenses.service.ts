import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Expense } from './expense';

@Injectable({
    providedIn: 'root',
})
export class ExpensesService{

    url: string = '/api/expenses/';

    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        return this.http.get(this.url);
    }

    findById(id: any): Observable<any> {
        return this.http.get(this.url + id);
    }

    create(expense: Expense) {
        return this.http.post(this.url, expense);
    }

    update(id: any, expense: Expense) {
        return this.http.put(this.url + id, expense);
    }

    delete(id: any) {
        return this.http.delete(this.url + id);
    }
}
