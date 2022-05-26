import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gig-new-account-form',
  templateUrl: './new-account-form.component.html',
  styleUrls: ['./new-account-form.component.css']
})
export class NewAccountFormComponent implements OnInit {

    @Input() visible: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
