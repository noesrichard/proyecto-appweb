import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Account } from '../../../services/accounts/account';
import { Option } from '../../../shared/components/dropdown-option-input/dropdown-option-input.component';

@Component({
    selector: 'gig-new-account-form',
    templateUrl: './new-account-form.component.html',
    styleUrls: ['./new-account-form.component.css'],
})
export class NewAccountFormComponent implements OnInit, OnChanges {
    @Input() visible: boolean = false;

    @Input() account?: Account;

    selected: Option = { label: 'Ahorro', value: 'ahorro' };

    accountTypeOptions: Option[] = [
        { label: 'Ahorro', value: 'ahorro' },
        { label: 'Crédito', value: 'credito' },
        { label: 'Efectivo', value: 'efectivo' },
    ];

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (this.account !== null) {
            this.selected = { label: 'Efectivo', value: 'efectivo' };
        }
    }
}
