import { TableData } from '../shared/data';
import { Column } from '../shared/column';
import { ColumnType } from '../shared/columntypes';

export const tableHeaders: Column[] = [
    { field: 'description', header: 'Descripción', type: ColumnType.String},
    { field: 'category', header: 'Categoría', type: ColumnType.Object},
    { field: 'total', header: 'Precio' , type: ColumnType.Money},
];

export class Wish implements TableData {
    userid?: any = sessionStorage.getItem("userid"); 
    _id?: string;
    description: string;
    category: string;
    total: number;

    constructor(
        description: string,
        category: string,
        total: number
    ) {
        this.description = description;
        this.category = category;
        this.total = total;
    }
}
