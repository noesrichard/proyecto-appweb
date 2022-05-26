import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gig-create-dialog',
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.css'],
})
export class CreateDialogComponent implements OnInit {
    @Input() title?: string = 'Title';

    displayForm: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    newRow() {
        this.displayForm = true;
    }

    hideForm() {
        this.displayForm = false;
    }
}
