import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gig-balance-view',
  templateUrl: './balance-view.component.html',
  styleUrls: ['./balance-view.component.css']
})
export class BalanceViewComponent implements OnInit {
    data: any;

    constructor() {}

    ngOnInit() {
        this.data = {
            labels: ['Ropa','Transporte','Comida'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
    }
}
