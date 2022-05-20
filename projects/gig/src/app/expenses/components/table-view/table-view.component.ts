import { Component, OnInit } from '@angular/core';
import { Expense, tableHeaders } from '../../../services/expenses/expense';
import { ExpensesService } from '../../../services/expenses/expenses.service';
import { Column } from '../../../services/shared/column';

@Component({
    selector: 'gig-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
    data: Expense[];

    columns: Column[];

    constructor(private expensesService: ExpensesService) {
        this.data = expensesService.getExpenses();
        this.columns = tableHeaders;
    }

    ngOnInit(): void {}
}
