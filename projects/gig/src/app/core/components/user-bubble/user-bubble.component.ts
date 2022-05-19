import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'gig-user-bubble',
    templateUrl: './user-bubble.component.html',
    styleUrls: ['./user-bubble.component.css'],
})
export class UserBubbleComponent implements OnInit {
    menuItems: MenuItem[] = [];
    constructor() {}

    ngOnInit(): void {
        this.menuItems = [
            { label: 'Configuración', icon: 'pi pi-fw pi-cog' },
            { label: 'Salir', icon: 'pi pi-fw pi-sign-out' },
        ];
    }
}
