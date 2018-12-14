import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter3'
})
export class FilterPipe3 implements PipeTransform {

  transform(fields, [attribute]) {
    return fields.filter(field => {
      console.log(attribute)
      return field[attribute] === true;
    });
  }
}