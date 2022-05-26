import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gig-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

    @Input() text: string = "Text"; 
    @Input() selected?: string; 
    @Input() id: string = 'id'; 
    @Output() onDataChanged: EventEmitter<string> = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {
  }

  sendData(){ 
    this.onDataChanged.emit(this.selected);
  }

}
