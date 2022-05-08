import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'gig-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(private primengConfig: PrimeNGConfig){  }
    title = 'gig';
}
