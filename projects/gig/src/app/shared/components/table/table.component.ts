import { Component, Input, OnInit } from '@angular/core';
import { ColumnType } from '../../../services/shared/columntypes';
import { Column } from '../../../services/shared/column';


@Component({
    selector: 'gig-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

    @Input() columns!: Column[];
    @Input() data: any; 

    stringData = ColumnType.String; 
    moneyData = ColumnType.Money; 

    constructor() {}

    ngOnInit(): void {}
}
