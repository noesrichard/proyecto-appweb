import { Injectable } from '@angular/core';
import { Wish } from './wish';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WishlistService {

    url: string = '/api/wish/';

    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        return this.http.get(this.url);
    }

    findById(id: any): Observable<any> {
        return this.http.get(this.url + id);
    }

    create(income: Wish) {
        return this.http.post(this.url, income);
    }

    update(id: any, income: Wish) {
        return this.http.put(this.url + id, income);
    }

    delete(id: any) {
        return this.http.delete(this.url + id);
    }
}
