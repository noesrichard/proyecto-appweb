import { Component, OnInit } from '@angular/core';
import { Income, tableHeaders } from '../../../services/income/income';
import { IncomeService } from '../../../services/income/income.service';
import { Column } from '../../../services/shared/column';

@Component({
    selector: 'gig-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
})

export class TableViewComponent implements OnInit {
    data: Income[];

    columns: Column[];

    constructor(private incomeService: IncomeService) {
        this.data = incomeService.getIncome();
        this.columns = tableHeaders;
    }

    ngOnInit(): void {}
}
