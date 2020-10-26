import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatsnackbarService } from './Modules/matsnackbar.service';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import * as _ from 'lodash';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dialogRef = null;
  displayedColumns: string[] = ['CustomerName', 'NoofItems', 'TotalAmount', 'Status', 'action'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  lstDetails: any = [
    {
      orderId: 1,
      CustomerName: "Chandan R k", NoofItems: "5", TotalAmount: "1000", Status: "Received",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },


      ],
      totalamount: 1000,
      Addresss: "123 Main Street, New York, NY 10030"
    },
    {
      orderId: 2,
      CustomerName: "Alexandra", NoofItems: "3", TotalAmount: "600", Status: "Preparing",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
     
      ],
      totalamount: 1000,
      Addresss: "Cecilia Chapman 711-2880 Nulla St.Mankato Mississippi 96522(257) 563-7401"
    }, {
      orderId: 3,
      CustomerName: "Bernadette", NoofItems: "4", TotalAmount: "800", Status: "Received",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
      ], totalamount: 1000,
      Addresss: "Celeste Slater 606-3727 Ullamcorper. Street Roseville NH 11523      (786) 713-8616"
    },
    {
      orderId: 4,
      CustomerName: "Elizabeth", NoofItems: "5", TotalAmount: "1000", Status: "Ready",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 }],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    },
    {
      orderId: 4,
      CustomerName: "Usman", NoofItems: "2", TotalAmount: "400", Status: "Ready",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
    ],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    },
    {
      orderId: 5,
      CustomerName: "Nala", NoofItems: "5", TotalAmount: "1000", Status: "Ready",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 }],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    },
    {
      orderId: 6,
      CustomerName: "Pumbaa", NoofItems: "5", TotalAmount: "1000", Status: "Ready",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 }],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    },
    {
      orderId: 7,
      CustomerName: "Elizabeth", NoofItems: "5", TotalAmount: "1000", Status: "Ready",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 }],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    },
    {
      orderId: 8,
      CustomerName: "Elizabeth", NoofItems: "5", TotalAmount: "1000", Status: "Ready",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 }],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    },
    {
      orderId: 9,
      CustomerName: "Elizabeth", NoofItems: "5", TotalAmount: "1000", Status: "Ready",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 }],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    },
    {
      orderId: 10,
      CustomerName: "Elizabeth", NoofItems: "5", TotalAmount: "1000", Status: "Received",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 }],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    },
    {
      orderId: 11,
      CustomerName: "Elizabeth", NoofItems: "5", TotalAmount: "1000", Status: "Preparing",
      items: [
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 },
        { itemname: "item1", amount: 200 }],
      totalamount: 1000,
      Addresss: "Calista Wise 7292 Dictum Av.San Antonio MI 47096 (492) 709-6392"
    }
  ]
  constructor(
    private dialog: MatDialog,
    private snackBar: MatsnackbarService,
  ) {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {

    this.dataSource.paginator = this.paginator; 2
    this.dataSource.data = _.cloneDeep(this.lstDetails)


  }


  fnViewOrder(data) {
    this.dialogRef = this.dialog.open(OrderdetailsComponent, {
      width: '550px',
      disableClose: true,
      data: data
    });

  }

  fnLogOut() {

  }

  fnChangeStatus(row, status) {
    debugger
    for (let i = 0; i < this.lstDetails.length; i++) {
      if (this.lstDetails[i].orderId == row.orderId) {
        this.lstDetails[i].Status = status;
      }
    }
    this.dataSource.data = _.cloneDeep(this.lstDetails)

  }


}
