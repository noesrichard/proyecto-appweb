import { Injectable } from '@angular/core';
import {Service} from '../shared/service';
import { Account } from './account';

@Injectable({
    providedIn: 'root',
})
export class AccountsService implements Service<Account>{
    accounts: Account[] = [
        new Account(1, 'Ahorro', 'JEP Ahorro', 'Para ahorrar', 100),
        new Account(2, 'Crédito', 'JEP Credito', 'Para ahorrar', 100),
        new Account(3, 'Efectivo', 'JEP Efectivo', 'Para ahorrar', 100),
        new Account(4, 'Ahorro', 'JEP Ahorro', 'Para ahorrar', 100),
    ];
    constructor() {}

    list(): Account[] {
        return this.accounts; 
    }

    findById(id: any): Account{ 
        let accountFinded = this.accounts.find(element => element.id == id)
        if (accountFinded){ 
            return accountFinded;
        }else{ 
            return new Account(0, "", "", "", 0);
        }

    }

    create(account: Account): void {
        this.accounts.push(account);
    }

    update(id: any, account: Account): void{ 
        let index = this.accounts.findIndex(e => e.id == id); 
        this.accounts[index] = account; 
    }

    delete(id: any): void{ 
        let index = this.accounts.findIndex(e => e.id == id); 
        this.accounts.splice(index, 1);
        console.log(this.accounts);
    }


}
