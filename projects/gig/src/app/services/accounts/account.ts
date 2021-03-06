import { TableData } from '../shared/data';
import { Column } from '../shared/column';
import { ColumnType } from '../shared/columntypes';

export const tableHeaders: Column[] = [
    { field: 'type', header: 'Tipo' , type: ColumnType.String},
    { field: 'name', header: 'Nombre' , type: ColumnType.String},
    { field: 'description', header: 'Descripción' , type: ColumnType.String},
    { field: 'expense', header: 'Balance' , type: ColumnType.Money},
];

export class Account implements TableData {
    userid?: any = sessionStorage.getItem("userid"); 
    _id?: string;
    type: string;
    name: string;
    description: string;
    expense: number;

    constructor(
        type: string,
        name: string,
        description: string,
        expense: number
    ) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.expense = expense;
    }

}
