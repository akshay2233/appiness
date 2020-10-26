import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrderdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  details: any = {};
  ngOnInit(): void {
    this.details = this.data;
  }
  fnCancel() {
    this.dialogRef.close();

  }
}
