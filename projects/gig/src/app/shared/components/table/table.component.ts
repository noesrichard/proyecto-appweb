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
    @Output() onShowNewForm: EventEmitter<boolean> = new EventEmitter(); 

    stringData = ColumnType.String; 
    moneyData = ColumnType.Money; 


    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    ngOnInit(): void {}

    deleteRow(rowId: number): void{ 
        this.confirmationService.confirm({ 
            message: '¿Seguro de eliminar el producto seleccionado?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => { 
                var index = this.data.map(x => { 
                    return x.id;
                }).indexOf(rowId);
                this.data.splice(index,1);
                this.messageService.add({severity:'success', summary:'Exitoso', detail: 'Registro eliminado', life: 3000});
            }

        });
    }

    showNewForm(): void{ 
        console.log("click en tabla")
        this.onShowNewForm.emit(true);
    }
}
