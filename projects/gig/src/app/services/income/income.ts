import { TableData } from '../shared/data';
import { Column } from '../shared/column';
import { ColumnType } from '../shared/columntypes';

export const tableHeaders: Column[] = [
    { field: 'type', header: 'Tipo' , type: ColumnType.String},
    { field: 'description', header: 'Descripcion' , type: ColumnType.String},
    //{ field: 'date', header: 'Fecha' , type: ColumnType.Date},
    { field: 'dateString', header: 'Fecha' , type: ColumnType.String},
    { field: 'account', header: 'Cuenta' , type: ColumnType.Object},
    { field: 'total', header: 'Ingreso Total' , type: ColumnType.Money},
];

export class Income implements TableData {
    _id?: string;
    type: string;
    description: string;
    date?: Date;
    dateString?: string; 
    account: any;
    total: number;


    constructor(
        type: string,
        description: string,
        account: string,
        total: number,
    ) {
        this.description = description;
        this.type = type;
        this.account = account;
        this.total = total;
    }

}
