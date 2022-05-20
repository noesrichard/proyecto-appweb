import {ColumnType} from "./columntypes";

export interface Column{ 
    field: string; 
    header: string;
    type: ColumnType;
}

