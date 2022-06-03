import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Column } from '../../../services/shared/column';
import {CategoryService} from '../../../services/categories/categories.service';
import {Category} from '../../../services/categories/category';
import { Wish, tableHeaders} from '../../../services/wishlist/wish';
import { WishlistService } from '../../../services/wishlist/wishlist.service';
import { Option } from '../../../shared/components/dropdown-option-input/dropdown-option-input.component';
@Component({
  selector: 'gig-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    wishs: Wish[] = [];
    wishHeaders: Column[];

    title: string = 'Nuevo Deseo';

    display: boolean = false;
    displayBuying: boolean = false;

    wish: Wish = new Wish( '', '',  0);

    constructor(
        private wishService: WishlistService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.listWish();
        this.wishHeaders = tableHeaders;
    }

    ngOnInit(): void {}

    listWish(){ 
        this.wishService.list().subscribe( data => { 
            this.wishs = data; 
            console.log(this.wishs);
        } );
    }

    onNew() {
        this.display = true;
        this.wish = new Wish( '', '', 0);
        this.title = 'Nuevo Deseo';
    }

    onNewExpense(wish: Wish){ 
        this.wish = wish; 
        this.displayBuying = true; 
    }

    onEdit(wish: Wish) {
        this.wish = wish;
        this.display = true;
        this.title = 'Editar Deseo';
    }

    onDelete(wish: Wish) {
        console.log(this.wishs);
        console.log('cuenta seleccionada', wish);
        let id = wish._id;
        this.confirmationService.confirm({
            message: '¿Seguro de eliminar el producto seleccionado?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.wishService.delete(id).subscribe(()=>{ 
                    this.listWish();
                });
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
        this.displayBuying = false; 
    }


}
