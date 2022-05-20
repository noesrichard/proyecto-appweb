import { Component, OnInit } from '@angular/core';
import { Column } from '../../../services/shared/column';

@Component({
    selector: 'gig-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
    data: any[] = [
        {
            name: 'Ropa',
            description: 'Camisetas, zapatos, ropa interior',
            expense: '$120',
        },
        {
            name: 'Transporte',
            description: 'Bus, Taxi, Viajes',
            expense: '$120',
        },
        {
            name: 'Comida',
            description: 'Compras, restaurantes',
            expense: '$120',
        },
    ];

    columns: Column[] = [
        { field: 'name', header: 'Nombre' },
        { field: 'description', header: 'Descripcion' },
        { field: 'expense', header: 'Gasto Total' },
    ];
    constructor() {}

    ngOnInit(): void {}
}
