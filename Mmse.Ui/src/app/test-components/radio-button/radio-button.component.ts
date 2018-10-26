import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmich-radio-button',
  templateUrl: './radio-button.component.html'
})
export class RadioButtonComponent implements OnInit {
  choices = ['Animal','Vegetable','Mineral','Robot'];

  constructor() { }

  ngOnInit() {
  }

}
