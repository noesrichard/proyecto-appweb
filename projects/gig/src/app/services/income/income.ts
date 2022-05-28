import { TableData } from '../shared/data';
import { Column } from '../shared/column';
import { ColumnType } from '../shared/columntypes';

export const tableHeaders: Column[] = [
    { field: 'type', header: 'Tipo' , type: ColumnType.String},
    { field: 'description', header: 'Descripcion' , type: ColumnType.String},
    { field: 'date', header: 'Fecha' , type: ColumnType.String},
    { field: 'account', header: 'Cuenta' , type: ColumnType.String},
    { field: 'total', header: 'Ingreso Total' , type: ColumnType.Money},
];

export class Income implements TableData {
    _id: number;
    type: string;
    description: string;
    date: Date;
    account: string;
    total: number;

    constructor(
        _id: number,
        type: string,
        description: string,
        date: Date,
        account: string,
        total: number
    ) {
        this._id = _id;
        this.description = description;
        this.type = type;
        this.date = date;
        this.account = account;
        this.total = total;
    }

    isNew(){ 
        if(this._id == 0){ 
            return true; 
        }
        return false; 
    }
}
