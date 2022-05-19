import { Component, Input, OnInit } from '@angular/core';

export interface Column{ 
    field: string, 
    header: string
}

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
