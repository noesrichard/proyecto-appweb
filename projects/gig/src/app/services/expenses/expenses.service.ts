import { Injectable } from '@angular/core';
import { Service } from '../shared/service';
import { Expense } from './expense';

@Injectable({
    providedIn: 'root',
})
export class ExpensesService implements Service<Expense> {
    constructor() {}

    list(): Expense[] {
        return [
            new Expense(
                1,
                'Unico',
                'Camiseta Nike',
                'Ropa',
                new Date('12/12/2022'),
                'JEP',
                30
            ),
        ];
    }

    findById(id: any): Expense {
        return new Expense(
                1,
                'Unico',
                'Camiseta Nike',
                'Ropa',
                new Date('12/12/2022'),
                'JEP',
                30);
    }

    create(element: Expense): void {}

    update(id: any, element: Expense): void {}

    delete(id: any): void {}
}
