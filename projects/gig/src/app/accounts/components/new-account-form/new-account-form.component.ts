import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, EventEmitter, Output} from '@angular/core';
import { Account } from '../../../services/accounts/account';
import { Option } from '../../../shared/components/dropdown-option-input/dropdown-option-input.component';
import {TextInputComponent} from '../../../shared/components/text-input/text-input.component';

@Component({
    selector: 'gig-new-account-form',
    templateUrl: './new-account-form.component.html',
    styleUrls: ['./new-account-form.component.css'],
})
export class NewAccountFormComponent implements OnInit{
    @Input() visible: boolean = false;

    @Input() account: Account = new Account(0, "", "", "", 0);

    @Output() onNewAccount: EventEmitter<Account> = new EventEmitter(); 

    displayForm: boolean = false; 


    selected: Option = { label: 'Ahorro', value: 'ahorro' };

    accountTypeOptions: Option[] = [
        { label: 'Ahorro', value: 'ahorro' },
        { label: 'Crédito', value: 'credito' },
        { label: 'Efectivo', value: 'efectivo' },
    ];

    constructor() {}

    ngOnInit(): void {
    }

    newAccount(){ 
        this.displayForm = true; 
        this.account = new Account(0, "", "", "", 0);
    }

    setName(name: string){ 
        this.account.name = name; 
    }
    setDescription(description: string){ 
        this.account.description = description; 
    }

    save(){ 
        this.displayForm = false;
        console.log(this.account);
        this.onNewAccount.emit(this.account);
    }

}
