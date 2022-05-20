import { Injectable } from '@angular/core';
import { Income } from './income';

@Injectable({
    providedIn: 'root',
})
export class IncomeService {
    constructor() {}

    getIncome(): Income[] {
        return [
            new Income(1, 'Unico', 'Deuda', new Date('12/12/2022'), 'JEP', 12),
        ];
    }
}
