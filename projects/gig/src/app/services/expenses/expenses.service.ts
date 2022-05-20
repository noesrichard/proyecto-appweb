import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable({
    providedIn: 'root',
})
export class ExpensesService {
    constructor() {}

    getExpenses(): Expense[] {
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
}
