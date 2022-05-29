import { TableData } from '../shared/data';
import { Column } from '../shared/column';
import { ColumnType } from '../shared/columntypes';

export const tableHeaders: Column[] = [
    { field: 'description', header: 'Descripcion', type: ColumnType.String},
    { field: 'category', header: 'Categoria', type: ColumnType.String},
    { field: 'total', header: 'Precio' , type: ColumnType.Money},
];

export class Wish implements TableData {
    _id?: number;
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
