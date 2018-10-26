import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmich-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit {
  mode = 'determinate';
  val = 50;
  constructor() { }

  ngOnInit() {
  }

}
