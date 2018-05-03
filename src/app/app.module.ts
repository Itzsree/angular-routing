import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    DashbaordComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
