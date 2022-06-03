import { TableData } from '../shared/data';
import { Column } from '../shared/column';
import { ColumnType } from '../shared/columntypes';

export const tableHeaders: Column[] = [
    { field: 'type', header: 'Tipo' , type: ColumnType.String},
    { field: 'description', header: 'Descripcion' , type: ColumnType.String},
    { field: 'category', header: 'Categoria' , type: ColumnType.Object},
    //{ field: 'date', header: 'Fecha' , type: ColumnType.Date},
    { field: 'dateString', header: 'Fecha' , type: ColumnType.String},
    { field: 'account', header: 'Cuenta' , type: ColumnType.Object},
    { field: 'total', header: 'Gasto Total' , type: ColumnType.Money},
];

export class Expense implements TableData {
    _id?: string;
    type: string;
    description: string;
    category?: any;
    date?: Date;
    dateString?: string; 
    account: any ;
    total: number;

    constructor(
        type: string,
        description: string,
        category: any,
        date: Date,
        account: any,
        total: number
    ) {
        this.description = description;
        this.type = type;
        this.category = category;
        this.date = date;
        this.account = account;
        this.total = total;
    }

}
