import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmich-button-toggle',
  templateUrl: './button-toggle.component.html'
})
export class ButtonToggleComponent implements OnInit {
  toggle = false;
  constructor() { }

  ngOnInit() {
  }

}
