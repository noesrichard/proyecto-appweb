import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
    providedIn: 'root',
})
export class AccountsService {
    constructor() {}

    getAccounts(): Account[] {
        return [
            new Account(1, 'Ahorro', 'JEP Ahorro', 'Para ahorrar', 100),
        ];
    }
}
