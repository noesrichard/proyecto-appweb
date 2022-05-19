import { Component, OnInit } from '@angular/core';
import { Column } from '../../../shared/components/table/table.component';

@Component({
    selector: 'gig-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
    data: any[] = [
        {
            type: 'Mensual',
            description: 'Sueldo',
            date: '20/06/2022',
            total: '$18.5',
        },
        {
            type: 'Unico',
            description: 'Deuda',
            date: '20/06/2022',
            total: '$10.5',
        },
    ];

    columns: Column[] = [
        { field: 'type', header: 'Tipo' },
        { field: 'description', header: 'Descripcion' },
        { field: 'date', header: 'Fecha' },
        { field: 'total', header: 'Ingreso Total' },
    ];
    constructor() {}

    ngOnInit(): void {}
}
