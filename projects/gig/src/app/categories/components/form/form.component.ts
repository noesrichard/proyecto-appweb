import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoryService } from '../../../services/categories/categories.service';
import { Category } from '../../../services/categories/category';

@Component({
    selector: 'gig-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    @Input() category!: Category;

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    @Output() dataChange: EventEmitter<any> = new EventEmitter();

    constructor(
        private categoryService: CategoryService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {}

    dataChanged() {
        this.dataChange.emit(true);
    }

    checkData() {
        if (this.category.name == '' || this.category.description == '') {
            return false;
        }
        return true;
    }

    save() {
        if (this.checkData()) {
            if (!this.category._id) {
                this.categoryService.create(this.category).subscribe(() => {
                    this.dataChanged();
                });
            } else {
                this.categoryService
                    .update(this.category._id, this.category)
                    .subscribe();
            }
            this.displayChange.emit(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Formulario Incompleto',
                detail: 'Debe completar el formulario',
                life: 3000,
            });
        }
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
