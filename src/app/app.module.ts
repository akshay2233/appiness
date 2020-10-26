import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './Modules/material.module';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderdetailsComponent]
})
export class AppModule { }

