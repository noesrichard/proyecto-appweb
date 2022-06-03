import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ColumnType } from '../../../services/shared/columntypes';
import { Column } from '../../../services/shared/column';
import { TableData } from '../../../services/shared/data';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
    selector: 'gig-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
})
export class TableComponent<T extends TableData> implements OnInit {

    @Input() columns!: Column[];
    @Input() data: T[] = []; 


    @Output() onEdit: EventEmitter<T> = new EventEmitter<T>();  
    @Output() onDelete: EventEmitter<T> = new EventEmitter<T>();  

    stringData = ColumnType.String; 
    moneyData = ColumnType.Money; 
    dateData = ColumnType.Date; 
    objectData = ColumnType.Object; 
    

    constructor() {}

    ngOnInit(): void {
    }

    deleteRow(element: T): void{ 
        this.onDelete.emit({ ...element })
    }


    editRow(element: T): void{ 
        console.log(element);
        this.onEdit.emit({ ...element });
    }
   
}


