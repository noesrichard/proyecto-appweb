import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'gig-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
    @Input() fullSize: boolean = false;
    @Output() onExitFullSize: EventEmitter<boolean> =
        new EventEmitter<boolean>();

    exitFullSize: boolean = false;
    menuItems: MenuItem[] = [];

    constructor() {}

    ngOnInit(): void {
        this.menuItems = [
            { label: 'Configuración', icon: 'pi pi-fw pi-cog' },
            {
                label: 'Salir',
                icon: 'pi pi-fw pi-sign-out',
                command: () => {
                    this.exitFullSize = !this.exitFullSize;
                    this.onExitFullSize.emit(this.exitFullSize);
                },
            },
        ];
    }

}
