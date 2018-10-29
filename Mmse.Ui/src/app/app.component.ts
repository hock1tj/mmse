import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mmse-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor(private readonly router: Router) {
      
  }

  ngOnInit() {

  }

}
