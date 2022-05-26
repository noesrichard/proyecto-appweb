import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
    @Output() type: EventEmitter<String> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    sendData(){ 
        this.type.emit(this.selected.value);
    }
}
