import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { Account, tableHeaders } from '../../../services/accounts/account';
import { Column } from '../../../services/shared/column';
import { Info } from '../../../shared/components/stat-card/stat-card.component';

@Component({
    selector: 'gig-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
    accounts: Account[];
    tableHeaders: Column[];
    visible: boolean = false;

    header: string = 'Vista de Tabla';

    constructor(private accountService: AccountsService) {
        this.accounts = this.accountService.getAccounts();
        this.tableHeaders = tableHeaders;
    }

    ngOnInit(): void {}

    showNewAccountForm(toggle: boolean){ 
        this.visible = !this.visible;
    }

    //info: Info = {
        //title: 'Pichincha Credito',
        //icon: 'pi pi-credit-card',
        //value: 100,
        //percentage: 15,
        //description: 'Tarjeta de credito',
    //};
    //info2: Info = {
        //title: 'JEP Ahorro',
        //icon: 'pi pi-credit-card',
        //value: 10,
        //percentage: 10,
        //description: 'Tarjeta de debito',
    //};

    //info3: Info = {
        //title: 'Efectivo',
        //icon: 'pi pi-dollar',
        //value: 80,
        //percentage: 60,
        //description: 'Billetera, efectivo',
    //};
}
