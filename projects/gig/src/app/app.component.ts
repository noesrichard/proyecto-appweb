import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'gig-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
    constructor(private primengConfig: PrimeNGConfig){  }
    title = 'gig';

    ngOnInit(): void {
        this.primengConfig.setTranslation({ 
        weak: 'Fácil',
        medium: 'Media',
        strong: 'Difícil',
        passwordPrompt: 'Ingrese una contraseña',
        })
    }
}
