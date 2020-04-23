import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsnumberPipe } from './isnumber.pipe';
import { isNumber } from 'util';



@NgModule({
  declarations: [
    IsnumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsnumberPipe
  ]
})
export class SharedModule { }
