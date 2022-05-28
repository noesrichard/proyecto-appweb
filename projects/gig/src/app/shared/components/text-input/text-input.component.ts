import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gig-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

    @Input() text: string = "Text"; 
    @Input() selected?: any; 
    @Input() id: string = 'id'; 
    @Output() onDataChanged: EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  sendData(){ 
    this.onDataChanged.emit(this.selected);
  }

}
