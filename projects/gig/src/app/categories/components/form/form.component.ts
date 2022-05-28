import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from '../../../services/categories/categories.service';
import {Category} from '../../../services/categories/category';

@Component({
    selector: 'gig-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    @Input() category!: Category;

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {}

    save() {
        if (this.category.isNew()) {
            this.categoryService.create(this.category);
        } else {
            this.categoryService.update(this.category._id, this.category);
        }
        this.displayChange.emit(false);
    }

    setName(name: string) {
        this.category.name = name;
    }

    setDescription(description: string) {
        this.category.description = description;
    }

    hideForm() {
        this.displayChange.emit(false);
    }
}
