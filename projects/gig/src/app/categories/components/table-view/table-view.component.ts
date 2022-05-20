import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories/categories.service';
import { Category, tableHeaders } from '../../../services/categories/category';
import { Column } from '../../../services/shared/column';

@Component({
    selector: 'gig-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
    data: Category[];

    columns: Column[];
    constructor(private categoriesService: CategoriesService) {
        this.data = categoriesService.getCategories();
        this.columns = tableHeaders;
    }

    ngOnInit(): void {}
}
