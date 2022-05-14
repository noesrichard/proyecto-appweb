import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'gig-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit, OnChanges{
    @Input() fullSize: boolean = false;

    @Output() onExitFullSize: EventEmitter<boolean> =
        new EventEmitter<boolean>();

    panelStyle: string = "panel"; 

    menuItems: MenuItem[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.menuItems = [
            { label: 'Configuración', icon: 'pi pi-fw pi-cog' },
            {
                label: 'Salir',
                icon: 'pi pi-fw pi-sign-out',
                command: () => {
                    this.fullSize = !this.fullSize;
                    this.onExitFullSize.emit(this.fullSize);
                },
            },
        ];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['fullSize'].currentValue){
            this.panelStyle = "panel full-size";
        }else{ 
            this.panelStyle = "panel"; 
        }
    }

}
