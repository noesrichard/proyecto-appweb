import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../../../services/shared/column';


@Component({
    selector: 'gig-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

    @Input() columns!: Column[];
    @Input() data: any; 

    constructor() {}

    ngOnInit(): void {}
}
