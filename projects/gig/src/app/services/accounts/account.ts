import { TableData } from '../shared/data';
import { Column } from '../shared/column';

export const tableHeaders: Column[] = [
    { field: 'type', header: 'Tipo' },
    { field: 'name', header: 'Nombre' },
    { field: 'description', header: 'Descripcion' },
    { field: 'expense', header: 'Gasto Total' },
];

export class Account implements TableData {
    id: number;
    type: string;
    name: string;
    description: string;
    expense: number;

    constructor(
        id: number,
        type: string,
        name: string,
        description: string,
        expense: number
    ) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.description = description;
        this.expense = expense;
    }
}
