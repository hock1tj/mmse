import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmich-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {
  choices =  ['Red','Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Purple', 'Magenta', 'Pink', 'Ultraviolet'];
  constructor() { }

  ngOnInit() {
  }

}
