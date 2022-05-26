import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gig-new-form',
    templateUrl: './new-form.component.html',
    styleUrls: ['./new-form.component.css'],
})
export class NewFormComponent implements OnInit {
    @Input() visible: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    hideNewForm(): void {
        this.visible = false;
    }
}
