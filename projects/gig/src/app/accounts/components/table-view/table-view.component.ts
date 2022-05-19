import { Component, OnInit } from '@angular/core';
import { Info } from '../../../shared/components/stat-card/stat-card.component';
import { Column } from '../../../shared/components/table/table.component';

@Component({
    selector: 'gig-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
    info: Info = {
        title: 'Pichincha Credito',
        icon: 'pi pi-credit-card',
        value: 100,
        description: 'Tarjeta de credito',
    };
    info2: Info = {
        title: 'JEP Ahorro',
        icon: 'pi pi-credit-card',
        value: 10,
        description: 'Tarjeta de debito',
    };

    header: string = 'Vista de Tabla';

    data: any[] = [
        {
            type: 'Credito',
            name: 'Pichincha Credito',
            description: 'Usada para compras generales',
            expense: '$100',
        },
        {
            type: 'Ahorro',
            name: 'JEP Ahorro',
            description: 'Usada para ahorrar',
            expense: '$10',
        },
        {
            type: 'Efectivo',
            name: 'Efectivo',
            description: 'Usada para compras en efectivo',
            expense: '$80',
        },
    ];

    columns: Column[] = [
        { field: 'type', header: 'Tipo' },
        { field: 'name', header: 'Nombre' },
        { field: 'description', header: 'Descripcion' },
        { field: 'expense', header: 'Gasto Total' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
