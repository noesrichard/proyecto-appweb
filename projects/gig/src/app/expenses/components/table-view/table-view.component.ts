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
            type: 'Unico',
            description: 'Camiseta Nike',
            category: 'Ropa',
            date: '13/06/2022',
            account: 'Efectivo',
            total: '$30',
        },
        {
            type: 'Unico',
            description: 'Boleto a Santa Rosa',
            category: 'Transporte',
            date: '02/06/2022',
            account: 'Efectivo',
            total: '$11',
        },
        {
            type: 'Unico',
            description: 'Pollo KFC',
            category: 'Comida',
            date: '02/06/2022',
            account: 'Pichincha Credito',
            total: '$6.50',
        },
        {
            type: 'Mensual Variante',
            description: 'Pago de Luz',
            category: 'Comida',
            date: '02/06/2022',
            account: 'Pichincha Credito',
            total: '$30',
        },
        {
            type: 'Mensual Fijo',
            description: 'Netflix',
            category: 'Entretenimiento',
            date: '02/06/2022',
            account: 'JEP Ahorro',
            total: '$15',
        },
    ];

    columns: Column[] = [
        { field: 'type', header: 'Tipo' },
        { field: 'description', header: 'Descripcion' },
        { field: 'category', header: 'Categoria' },
        { field: 'date', header: 'Fecha' },
        { field: 'account', header: 'Cuenta' },
        { field: 'total', header: 'Gasto Total' },
    ];
    constructor() {}

    ngOnInit(): void {}
}
