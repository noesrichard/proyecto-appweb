import { Component, OnInit } from '@angular/core';
import {Expense, tableHeaders} from '../../../services/expenses/expense';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Column } from '../../../services/shared/column';
import {ExpensesService} from '../../../services/expenses/expenses.service';

@Component({
  selector: 'gig-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    expenses: Expense[];
    expenseHeaders: Column[];

    title: string = 'Crear Cuenta';

    display: boolean = false;

    expense: Expense = new Expense(0, '', '', '', new Date(Date.now()), '', 0);

    constructor(
        private expenseService: ExpensesService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.expenses = this.expenseService.list();
        this.expenseHeaders = tableHeaders;
    }

    ngOnInit(): void {}

    onNew() {
        this.display = true;
        this.expense = new Expense(0, '', '', '', new Date(Date.now()), '', 0);
        this.title = 'Crear Cuenta';
    }

    onEdit(expense: Expense) {
        this.expense = expense;
        this.display = true;
        this.title = 'Editar Cuenta';
    }

    onDelete(expense: Expense) {
        console.log(this.expenses);
        console.log("cuenta seleccionada", expense);
        let id = expense._id;
        this.confirmationService.confirm({
            message: '¿Seguro de eliminar el producto seleccionado?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.expenseService.delete(id);
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
