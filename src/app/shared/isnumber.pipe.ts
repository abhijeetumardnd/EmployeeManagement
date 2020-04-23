import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isnumber'
})
export class IsnumberPipe implements PipeTransform {

  transform(value: any): string {
    return this.isNumber(value) ? value : 'NA';
  }

  isNumber(value: string | number): boolean {
    return ((value != null) &&
      (value !== '') &&
      !isNaN(Number(value.toString())));
  }
}
