import { Injectable } from '@angular/core';
import {Service} from '../shared/service';
import { Income } from './income';

@Injectable({
    providedIn: 'root',
})
export class IncomeService implements Service<Income>{

    constructor() {}

    list(): Income[] {
        return [
            new Income(
                1,
                'Unico',
                'Camiseta Nike',
                new Date('12/12/2022'),
                'JEP',
                30
            ),
        ];
    }

    findById(id: any): Income {
        return new Income(
            1,
            'Unico',
            'Camiseta Nike',
            new Date('12/12/2022'),
            'JEP',
            30
        );
    }

    create(element: Income): void {}

    update(id: any, element: Income): void {}

    delete(id: any): void {}
}
