import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { Account, tableHeaders } from '../../../services/accounts/account';
import { Column } from '../../../services/shared/column';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'gig-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
    accounts: Account[] = [];
    accountHeaders: Column[];

    title: string = 'Nueva Cuenta';

    display: boolean = false;

    account: Account = new Account( '', '', '', 0);

    constructor(
        private accountService: AccountsService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.accountHeaders = tableHeaders;
    }

    ngOnInit(): void {
        this.listAccounts();
    }

    listAccounts(){ 
        this.accountService.list().subscribe(data => { 
            this.accounts = data; 
        })
    }


    onNew() {
        this.display = true;
        this.account = new Account( '', '', '', 0);
        this.title = 'Nueva Cuenta';
    }

    onEdit(account: Account) {
        this.account = account;
        this.display = true;
        this.title = 'Editar Cuenta';
    }

    onDelete(account: Account) {
        console.log(this.accounts);
        console.log("cuenta seleccionada", account);
        let id = account._id;
        this.confirmationService.confirm({
            message: '¿Seguro de eliminar el producto seleccionado?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.accountService.delete(id).subscribe(
                    () => { this.listAccounts() }
                );
                console.log(id);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Exitoso',
                    detail: 'Registro eliminado',
                    life: 3000,
                });
            },
        });
    }

    hideForm() {
        this.display = false;
    }
}
