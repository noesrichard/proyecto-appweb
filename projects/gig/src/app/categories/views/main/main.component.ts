import { Component, OnInit } from '@angular/core';
import { Category, tableHeaders} from '../../../services/categories/category';
import { CategoryService } from '../../../services/categories/categories.service';
import { ConfirmationService, MessageService} from "primeng/api";
import {Column} from '../../../services/shared/column';

@Component({
  selector: 'gig-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    categorys: Category[];
    categoryHeaders:  Column[];

    title: string = 'Crear Cuenta';

    display: boolean = false;

    category: Category = new Category(0, '', '', 0);

    constructor(
        private categoryService: CategoryService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.categorys = this.categoryService.list();
        this.categoryHeaders = tableHeaders;
    }

    ngOnInit(): void {}

    onNew() {
        this.display = true;
        this.category = new Category(0, '', '', 0);
        this.title = 'Crear Cuenta';
    }

    onEdit(category: Category) {
        this.category = category;
        this.display = true;
        this.title = 'Editar Cuenta';
    }

    onDelete(category: Category) {
        console.log(this.categorys);
        console.log("cuenta seleccionada", category);
        let id = category._id;
        this.confirmationService.confirm({
            message: '¿Seguro de eliminar el producto seleccionado?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.categoryService.delete(id);
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
