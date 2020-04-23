import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsnumberPipe } from './isnumber.pipe';
import { isNumber } from 'util';
import { SearchFilterPipe } from './search-filter.pipe';



@NgModule({
  declarations: [
    IsnumberPipe,
    SearchFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsnumberPipe,
    SearchFilterPipe
  ]
})
export class SharedModule { }
