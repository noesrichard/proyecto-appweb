import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CategoryService{
    url: string = '/api/categories/';

    constructor(private http: HttpClient) {}

    userid?: any = sessionStorage.getItem("userid"); 

    list(): Observable<any> {
        return this.http.get(this.url+this.userid);
    }

    findById(id: any): Observable<any> {
        return this.http.get(this.url + id);
    }

    create(category: Category) {
        return this.http.post(this.url, category);
    }

    update(id: any, category: Category) {
        return this.http.put(this.url + id, category);
    }

    delete(id: any) {
        return this.http.delete(this.url + id);
    }
}
