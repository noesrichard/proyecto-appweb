import { TableData } from '../shared/data';
import { Column } from '../shared/column';
import { ColumnType } from '../shared/columntypes';

export const tableHeaders: Column[] = [
    { field: 'name', header: 'Nombre' , type: ColumnType.String},
    { field: 'description', header: 'Descripcion' , type: ColumnType.String},
    { field: 'expense', header: 'Gasto Total' , type: ColumnType.Money},
];

export class Category implements TableData {
    id: number;
    name: string;
    description: string;
    expense: number;

    constructor(
        id: number,
        name: string,
        description: string,
        expense: number
    ) {
        this.id = id;
        this.expense = expense; 
        this.name = name;
        this.description = description;
        this.expense = expense;
    }
}