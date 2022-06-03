import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'gig-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
    @Output() onDataChanged: EventEmitter<any> = new EventEmitter<any>();

    @Input() username?: any; 

    constructor() {}

    ngOnInit(): void {}

    sendData(){ 
        this.onDataChanged.emit(this.username); 
    }
}
