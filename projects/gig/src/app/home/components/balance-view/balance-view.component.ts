import { Component, OnInit } from '@angular/core';
import { Account } from '../../../services/accounts/account';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { CategoryService } from '../../../services/categories/categories.service';
import { Category } from '../../../services/categories/category';

@Component({
    selector: 'gig-balance-view',
    templateUrl: './balance-view.component.html',
    styleUrls: ['./balance-view.component.css'],
})
export class BalanceViewComponent implements OnInit {
    categoryLabels: string[] = [];
    categoryNumbers: number[] = [];

    accountLabels: string[] = [];
    accountNumbers: number[] = [];

    categoryData: any = {};
    accountData: any = {};

    categories: Category[] = [];
    accounts: Account[] = [];

    constructor(
        private categoryService: CategoryService,
        private accountsService: AccountsService
    ) {}

    ngOnInit() {
        this.categoryService.list().subscribe((data) => {
            this.categories = data;
            this.categories.forEach((element: Category) => {
                this.categoryLabels.push(element.name);
                this.categoryNumbers.push(element.expense);
            });

            this.categoryData = {
                labels: this.categoryLabels,
                datasets: [
                    {
                        data: this.categoryNumbers,
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                ],
            };
        });

        this.accountsService.list().subscribe((data) => {
            this.accounts = data;
            this.accounts.forEach((element: Account) => {
                this.accountLabels.push(element.name);
                this.accountNumbers.push(element.expense);
            });

            this.accountData = {
                labels: this.accountLabels,
                datasets: [
                    {
                        data: this.accountNumbers,
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                ],
            };
        });
    }
}
