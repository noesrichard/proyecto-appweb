import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'gig-user-bubble',
    templateUrl: './user-bubble.component.html',
    styleUrls: ['./user-bubble.component.css'],
})
export class UserBubbleComponent implements OnInit {
    menuItems: MenuItem[] = [];
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.menuItems = [
            {
                label: 'Salir',
                icon: 'pi pi-fw pi-sign-out',
                command: () => {
                    sessionStorage.clear();
                    this.router.navigate(['/login']);
                },
            },
        ];
    }
}
