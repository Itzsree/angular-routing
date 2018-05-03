import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
