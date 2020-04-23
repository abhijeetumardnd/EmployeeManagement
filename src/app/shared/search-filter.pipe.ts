import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: [], args?: string): any {

    if (!value) { return null; }
    if (!args) { return value; }

    args = args.toLowerCase();

    return value.filter((item) => {
      return JSON.stringify(item['name']).toLowerCase().includes(args)
      JSON.stringify(item['address']['city']).toLowerCase().includes(args);
    });
  }

}
