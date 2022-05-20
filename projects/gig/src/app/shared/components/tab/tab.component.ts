import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gig-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
    @Input() header: string = "Header"; 
    constructor() {}

    ngOnInit(): void {}  

}
