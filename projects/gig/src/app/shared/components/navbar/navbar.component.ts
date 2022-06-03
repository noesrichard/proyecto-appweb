import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'gig-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

    @Output() onExpandedNavbar: EventEmitter<boolean> = new EventEmitter<boolean>(); 
    expanded: boolean = true; 
    navbarItems: MenuItem[] = []; 
    menuItems: MenuItem[] = []
    constructor() {}

    ngOnInit(): void {
        this.navbarItems = [ 
            {label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/balance']},
            {label: 'Cuentas', icon: 'pi pi-fw pi-credit-card', routerLink: ['/accounts']},
            {label: 'Categorías', icon: 'pi pi-fw pi-align-center', routerLink: ['/categories']},
            {label: 'Ingresos', icon: 'pi pi-fw pi-arrow-circle-up', routerLink: ['/income']},
            {label: 'Gastos', icon: 'pi pi-fw pi-arrow-circle-down', routerLink: ['/expenses']},
            {label: 'WishList', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/wishlist']},
        ];
        this.menuItems = [
            { label: 'Configuración', icon: 'pi pi-fw pi-cog' },
            { label: 'Salir', icon: 'pi pi-fw pi-sign-out' }
        ]
    }

    expandNavbar(){ 
        this.expanded = !this.expanded; 
        this.onExpandedNavbar.emit(this.expanded);
    }
}
