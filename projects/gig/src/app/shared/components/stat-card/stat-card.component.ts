import { Component, OnInit, Input} from '@angular/core';

export interface Info{ 
    title: string, 
    icon: string, 
    value: number,
    description: string
}

@Component({
  selector: 'gig-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent implements OnInit {

    @Input() info: Info = { 
        title: 'Ahorro JEP', 
        icon: 'pi pi-credit-card', 
        value: 128.0,
        description: 'Tarjeta de credito'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
