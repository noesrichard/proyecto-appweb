import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gig-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {

    fullSizePanel: boolean = false; 

    constructor() {}

    ngOnInit(): void {}

    makePanelFullSize(isExpanded: boolean){ 
        this.fullSizePanel = !this.fullSizePanel; 
        console.log(this.fullSizePanel);
    }

    exitFullSize(exit: boolean){ 
        this.fullSizePanel = false; 
    }
}
