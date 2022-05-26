import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gig-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

    @Input() text: string = "Text"; 
    @Input() selected?: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
