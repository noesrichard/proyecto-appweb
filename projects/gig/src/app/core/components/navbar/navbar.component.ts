import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'gig-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    items: MenuItem[] = []; 
    constructor() {}

    ngOnInit(): void {
        this.items = [ 
            {label: 'Inicio', icon: 'pi pi-fw pi-home'},
            {label: 'Cuentas', icon: 'pi pi-fw pi-credit-card'},
            {label: 'Categorias', icon: 'pi pi-fw pi-align-center'},
            {label: 'Ingresos', icon: 'pi pi-fw pi-arrow-circle-up'},
            {label: 'Gastos', icon: 'pi pi-fw pi-arrow-circle-down'},
            {label: 'WishList', icon: 'pi pi-fw pi-shopping-cart'},
        ]
    }
}
