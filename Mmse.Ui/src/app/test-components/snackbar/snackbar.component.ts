import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'cmich-snackbar',
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  openSnackBar(message: string, action: string, css:string): void {
    this.snackBar.open(message, action, {
      panelClass: css
    }
    );
  }
}
