import { Component, OnInit } from '@angular/core';
import { Column } from '../../../shared/components/table/table.component';

@Component({
  selector: 'gig-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

    data: any[] = [
        {
            description: 'Camiseta Nike',
            category: 'Ropa',
            total: '$30',
        },
        {
            description: 'Boleto a Santa Rosa',
            category: 'Transporte',
            total: '$10.5',
        },
        {
            description: 'Pollo KFC',
            category: 'Comida',
            total: '$6.50',
        },
    ];

    columns: Column[] = [
        { field: 'description', header: 'Descripcion' },
        { field: 'category', header: 'Categoria' },
        { field: 'total', header: 'Precio' },
    ];
    constructor() {}

    ngOnInit(): void {}
}
