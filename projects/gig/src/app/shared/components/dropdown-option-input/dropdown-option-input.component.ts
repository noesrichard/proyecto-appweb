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

    constructor() {}

    ngOnInit(): void {}
}
