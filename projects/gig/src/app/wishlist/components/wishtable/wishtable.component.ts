import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ColumnType } from '../../../services/shared/columntypes';
import { Column } from '../../../services/shared/column';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Wish } from '../../../services/wishlist/wish';
@Component({
    selector: 'gig-wishtable',
    templateUrl: './wishtable.component.html',
    styleUrls: ['./wishtable.component.css'],
})
export class WishtableComponent implements OnInit {
    @Input() columns!: Column[];
    @Input() data: Wish[] = [];

    @Output() onEdit: EventEmitter<Wish> = new EventEmitter<Wish>();
    @Output() onDelete: EventEmitter<Wish> = new EventEmitter<Wish>();
    @Output() onNewExpense: EventEmitter<Wish> = new EventEmitter<Wish>();

    date: string = '';

    stringData = ColumnType.String;
    moneyData = ColumnType.Money;
    dateData = ColumnType.Date;
    objectData = ColumnType.Object;

    constructor() {}

    ngOnInit(): void {}

    deleteRow(element: Wish): void {
        this.onDelete.emit({ ...element });
    }

    editRow(element: Wish): void {
        console.log(element);
        this.onEdit.emit({ ...element });
    }

    createExpense(element: Wish): void{ 
        this.onNewExpense.emit({...element});
    }
}
