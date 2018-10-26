import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmich-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent implements OnInit {
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() { }

  ngOnInit() {
    this.mode = 'determinate';
    this.value = 50;
    this.bufferValue = 75;
  }

}
