import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Income, tableHeaders } from '../../../services/income/income';
import { IncomeService } from '../../../services/income/income.service';
import { Column } from '../../../services/shared/column';

@Component({
    selector: 'gig-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
    incomes: Income[] = [];
    incomeHeaders: Column[];

    title: string = 'Nueva Cuenta';

    display: boolean = false;

    income: Income = new Income( '', '', new Date(Date.now()), '', 0);

    constructor(
        private incomeService: IncomeService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.incomeService.list().subscribe( data => { 
            this.incomes = data; 
        } );
        this.incomeHeaders = tableHeaders;
    }

    ngOnInit(): void {}

    onNew() {
        this.display = true;
        this.income = new Income( '', '', new Date(Date.now()), '', 0);
        this.title = 'Nueva Cuenta';
    }

    onEdit(income: Income) {
        this.income = income;
        this.display = true;
        this.title = 'Editar Cuenta';
    }

    onDelete(income: Income) {
        console.log(this.incomes);
        console.log('cuenta seleccionada', income);
        let id = income._id;
        this.confirmationService.confirm({
            message: '¿Seguro de eliminar el producto seleccionado?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.incomeService.delete(id).subscribe();
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
