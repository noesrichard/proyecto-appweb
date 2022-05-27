import { Component, Input, OnInit } from '@angular/core';
export interface Option {
    label: string;
    value: string;
}
@Component({
    selector: 'gig-dropdown-option-input',
    templateUrl: './dropdown-option-input.component.html',
    styleUrls: ['./dropdown-option-input.component.css'],
})
export class DropdownOptionInputComponent implements OnInit {
    @Input() options!: Option[];
    @Input() title!: string;
    @Input() selected?: Option;
    @Input() optionSelected: string = "Ahorro"; 

    option: Option = {
        label: 'Option',
        value: 'Option',
    };
    accountTypeOptions: Option[] = [
        { label: 'Ahorro', value: 'ahorro' },
        { label: 'Crédito', value: 'credito' },
        { label: 'Efectivo', value: 'efectivo' },
    ];
    getOption() {
        this.accountTypeOptions.forEach(element => { 
            if(element.label === this.optionSelected){ 
                this.option  = element;
            }
        })
    }
    constructor() {}

    ngOnInit(): void {
        this.getOption();
    }
}
