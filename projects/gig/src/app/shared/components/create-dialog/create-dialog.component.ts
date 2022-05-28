import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gig-create-dialog',
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.css'],
})
export class CreateDialogComponent implements OnInit {
    @Input() title: string = 'Title';

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {}

    onNew() {
        this.display = true;
    }

}
