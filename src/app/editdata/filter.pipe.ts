import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(fields, [attribute]) {
    return fields.filter(field => {
      console.log(attribute)
      return field[attribute] === "mandatory";
    });
  }
}