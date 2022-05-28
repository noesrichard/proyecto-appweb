import { Injectable } from '@angular/core';
import { Service } from '../shared/service';
import { Category } from './category';

@Injectable({
    providedIn: 'root',
})
export class CategoryService implements Service<Category> {
    constructor() {}

    getCategories(): Category[] {
        return [new Category(1, 'Ropa', 'Camiestas, zapatos, etc...', 30)];
    }

    list(): Category[] {
        return [new Category(1, 'Ropa', 'Camiestas, zapatos, etc...', 30)];
    }

    findById(id: any): Category {
        return new Category(1, 'Ropa', 'Camiestas, zapatos, etc...', 30);
    }

    create(element: Category): void {}

    update(id: any, element: Category): void{

    }

    delete(id: any): void{

    }
}
