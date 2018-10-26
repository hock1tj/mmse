import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';




@Component({
  selector: 'cmich-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
  result: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  open(): void {
    const dialogRef = this.dialog.open(TestDialogComponent);

    dialogRef.afterClosed().subscribe(result=>{ this.result= result});
  }

}

@Component({
  selector: 'cmich-test-dialog',
  template: `<h1 mat-dialog-title>Confirm</h1>
<div mat-dialog-content>
  <p>Are you sure you want to do this?</p>
</div>

<div mat-dialog-actions>
<button mat-button (click)="close('You are not sure.')" color="bluegrey">
    Nooooooo
  </button>
  <button mat-button (click)="close('You are pretty sure.')" color="maroon">
    Whatever
  </button>
</div>`
})
export class TestDialogComponent {
  constructor(public dialogRef: MatDialogRef<TestDialogComponent>) {

  }
  close(text: string): void {
    this.dialogRef.close(text);
  }
};



